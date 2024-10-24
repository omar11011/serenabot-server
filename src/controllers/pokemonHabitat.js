const PokemonHabitat = require('../models/PokemonHabitat')

const getHabitat = async (req, res) => {
    const name = req.params.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const data = await PokemonHabitat.findOne({
        name: new RegExp(name, 'i')
    }).lean().select('-__v -createdAt -updatedAt')

    return res.json(data || { error: 'Habitat no encontrado' })
}

module.exports = {
    getHabitat,
}