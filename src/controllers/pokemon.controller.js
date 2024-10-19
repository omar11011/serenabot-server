const Pokemon = require('../models/Pokemon')

const getCaptures = async (req, res) => {
    let params = req.params
    let query = req.query
    let obj = {
        owner: params.user,
        $or: [],
    }
    let baseURL = `${process.env.SITE_URL}/api/pokemon/captures/${params.user}?`
    let newQueries = []

    if (query.name && query.name.length > 2) {
        let normalizedSearch = query.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        obj.$or.push({
            pokemon: { $regex: new RegExp(normalizedSearch, 'i') },
        })
        obj.$or.push({
            'traits.nickname': { $regex: new RegExp(normalizedSearch, 'i') },
        })
        newQueries.push(`name=${query.name}`)
    }
    if (query.shiny) {
        obj['features.isShiny'] = true
        newQueries.push(`shiny=true`)
    }
    if (query.dynamax) {
        obj['features.isDynamax'] = true
        newQueries.push(`dynamax=true`)
    }
    if (query.legendary) {
        obj['features.isLegendary'] = true
        newQueries.push(`legendary=true`)
    }
    if (query.mythical) {
        obj['features.isMythical'] = true
        newQueries.push(`mythical=true`)
    }
    if (query.ultrabeast) {
        obj['features.isUltraBeast'] = true
        newQueries.push(`ultrabeast=true`)
    }
    if (query.select) {
        obj['options.isSelected'] = true
        newQueries.push(`select=true`)
    }
    if (query.favorite) {
        obj['features.isFavorite'] = true
        newQueries.push(`favorite=true`)
    }
    
    if (newQueries.length > 0) baseURL += newQueries.join('&') + '&'

    try {
        let page = parseInt(query.page) || 1
        let limit = parseInt(query.limit) || 20
    
        if (page < 1) page = 1
        if (limit < 1) limit = 20
        let skip = (page - 1) * limit

        let ids = await Pokemon.find({}).select('_id').lean()
        ids = ids.map(e => e._id.toString())

        let data = await Pokemon.find(obj).lean()
        let count = data.length
        data = data.slice(skip, page * limit).map(e => {
            let index = ids.indexOf(e._id.toString())
            e.index = index + 1
            return e
        })

        let response = {
            count,
            page,
            limit,
            next: (skip + limit < count) ? `${baseURL}page=${page + 1}&limit=${limit}` : null,
            previous: (page > 1) ? `${baseURL}page=${page - 1}&limit=${limit}` : null,
            results: data,
        }
        
        return res.json(response)
    }
    catch {
        return res.status(500).json({
            count: 0,
            next: null,
            previous: null,
            results: []
        })
    }
}

const createPokemon = async (req, res) => {
    let pokemonData = req.body

    if (!pokemonData.pokemon) return res.json({ error: 'No especificó el nombre del Pokémon' })

    let pokemon = (await Pokemon.create(pokemonData)).toObject()

    return res.json(pokemon)
}

const updatePokemon = async (req, res) => {
    let { id, set = {}, inc = {} } = req.body
    if (!id) return res.status(400).json({ error: 'No se especificó el Pokémon' })

    let pokemonWanted = await Pokemon.findOneAndUpdate(
        { _id: id },
        { 
            $set: set, 
            $inc: inc 
        },
        { new: true, upsert: true }
    )

    return res.json(pokemonWanted)
}

module.exports = {
    getCaptures,
    createPokemon,
    updatePokemon,
}