const PokemonType = require('../models/PokemonType')

const excludedData = '-__v -createdAt -updatedAt'

const getType = async (req, res) => {
    const name = req.params.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const data = await PokemonType.findOne({
        key: new RegExp(`^${name}$`, 'i')
    }).lean().select(excludedData)

    return res.json(data || { error: 'Tipo no encontrado' })
}

const getTypes = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = 20
    const offset = (page - 1) * limit

    const totalDocuments = await PokemonType.countDocuments({})
    const data = await PokemonType.find({})
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


module.exports = {
    getType,
    getTypes,
}