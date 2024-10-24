const PokemonHabitat = require('../models/PokemonHabitat')

const excludedData = '-__v -createdAt -updatedAt'

const getHabitat = async (req, res) => {
    const name = req.params.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const data = await PokemonHabitat.findOne({
        name: new RegExp(name, 'i')
    }).lean().select(excludedData)

    return res.json(data || { error: 'Habitat no encontrado' })
}

const getHabitats = async (req, res) => {
    const data = await PokemonHabitat.find({}).lean().select(excludedData)
    return res.json(data)
}

module.exports = {
    getHabitat,
    getHabitats,
}