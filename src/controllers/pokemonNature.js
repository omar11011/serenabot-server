const PokemonNature = require('../models/PokemonNature')

const excludedData = '-__v -createdAt -updatedAt'

const getNature = async (req, res) => {
    const name = req.params.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const data = await PokemonNature.findOne({
        key: new RegExp(`^${name}$`, 'i')
    }).lean().select(excludedData)

    if (!data) return res.json({ error: 'Naturaleza no encontrado' })

    return res.json(data)
}

const getNatures = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = 20
    const offset = (page - 1) * limit

    const totalDocuments = await PokemonNature.countDocuments({})
    const data = await PokemonNature.find({})
        .skip(offset)
        .limit(limit)
        .lean()
        .select(excludedData)

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

const getRandomNature = async (req, res) => {
    let randomNature = await PokemonNature.aggregate([
        { $sample: { size: 1 } }
    ])

    return res.json(randomNature[0])
}

module.exports = {
    getNature,
    getNatures,
    getRandomNature,
}