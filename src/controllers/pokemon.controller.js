const Pokemon = require('../models/Pokemon')

const createPokemon = async (req, res) => {
    let pokemonData = req.body

    if (!pokemonData.pokemon) return res.json({ error: 'No especificó el nombre del Pokémon' })

    let pokemon = (await Pokemon.create(pokemonData)).toObject()

    return res.json(pokemon)
}

module.exports = {
    createPokemon,
}