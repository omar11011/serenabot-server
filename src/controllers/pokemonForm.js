const PokemonForm = require('../models/PokemonForm')

const excludedData = '-__v -createdAt -updatedAt'

const getPokemon = async (req, res) => {
    const name = req.params.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const data = await PokemonForm.findOne({
        key: new RegExp(`^${name}$`, 'i')
    })
    .populate({
        path: 'specie',
        populate: [
            { path: 'habitat' },
            { path: 'growth' },
            { path: 'eggGroup' },
        ],
    })
    .populate({ path: 'region' })
    .populate({ path: 'type' })
    .lean()
    .select(excludedData)

    if (!data) return res.json( { error: 'Pokémon no encontrado' })

    data.image = {
        default: `${req.protocol}://${req.get('host')}/upload/pokemon-form/${data.name}.png`,
        shiny: `${req.protocol}://${req.get('host')}/upload/pokemon-form/shiny/${data.name}.png`,
    }

    return res.json(data)
}

const getPokemons = async (req, res) => {
    const obj = {}
    const page = parseInt(req.query.page) || 1
    const limit = 20
    const offset = (page - 1) * limit

    const totalDocuments = await PokemonForm.countDocuments({})
    const data = await PokemonForm.find(obj)
        .skip(offset)
        .limit(limit)
        .lean()
        .select('_id name')

    data.forEach(e => {
        e.url = `${req.protocol}://${req.get('host')}${req.originalUrl.split('?')[0]}${e.name}`
    })

    const baseUrl = `${req.protocol}://${req.get('host')}${req.originalUrl.split('?')[0]}`
    const previousPage = page > 1 ? `${baseUrl}?page=${page - 1}` : null
    const nextPage = offset + limit < totalDocuments ? `${baseUrl}?page=${page + 1}` : null

    return res.json({
        totalDocuments,
        next: nextPage,
        previous: previousPage,
        results: data,
    })
}

const getPokemonSpawn = async (req, res) => {
    let randomPokemon = await PokemonForm.aggregate([
        {
            $match: {
                'features.isMega': false,
                'features.isGiga': false,
                'features.isTemporaryForm': false,
            }
        },
        { $sample: { size: 1 } }
    ])
    let pokemon = await PokemonForm.findById(randomPokemon[0]._id).lean().populate({
        path: 'specie',
        select: 'name',
    }).select('name')

    pokemon.image = `${req.protocol}://${req.get('host')}/upload/pokemon-form/${pokemon.name}.png`

    return res.json(pokemon)
}

module.exports = {
    getPokemon,
    getPokemons,
    getPokemonSpawn,
}