const PokemonHabitat = require('../models/PokemonHabitat')

const excludedData = '-__v -createdAt -updatedAt'

const getHabitat = async (req, res) => {
    const name = req.params.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const data = await PokemonHabitat.findOne({
        key: new RegExp(`^${name}$`, 'i')
    }).lean().select(excludedData)

    if (!data) return res.json({ error: 'Habitat no encontrado' })

    data.image = `${req.protocol}://${req.get('host')}/upload/pokemon-habitat/${data.name}.gif`

    return res.json(data)
}

const getHabitats = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = 20
    const offset = (page - 1) * limit

    const totalDocuments = await PokemonHabitat.countDocuments({})
    const data = await PokemonHabitat.find({})
        .skip(offset)
        .limit(limit)
        .lean()
        .select(excludedData)

    data.forEach(e => {
        e.image = `${req.protocol}://${req.get('host')}/upload/pokemon-habitat/${e.name}.gif`
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

module.exports = {
    getHabitat,
    getHabitats,
}