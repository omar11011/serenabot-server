const PokemonNature = require('../models/PokemonNature')
const PokemonEggGroup = require('../models/PokemonEggGroup')
const PokemonGrowth = require('../models/PokemonGrowth')
const PokemonHabitat = require('../models/PokemonHabitat')

const pokemonNature = require('../data/pokemon-nature')
const pokemonEggGroup = require('../data/pokemon-egg-group')
const pokemonGrowth = require('../data/pokemon-growth')
const pokemonHabitat = require('../data/pokemon-habitat')

module.exports = async () => {
    // Naturaleza
    // await PokemonNature.deleteMany({})
    // await PokemonNature.insertMany(pokemonNature)
    // console.log('Naturalezas actualizadas.')

    // // Grupo Huevo
    // await PokemonEggGroup.deleteMany({})
    // await PokemonEggGroup.insertMany(pokemonEggGroup)
    // console.log('Grupos Huevo actualizados.')

    // // Crecimiento
    // await PokemonGrowth.deleteMany({})
    // await PokemonGrowth.insertMany(pokemonGrowth)
    // console.log('Crecimientos actualizados.')

    // Habitat
    // await PokemonHabitat.deleteMany({})
    // await PokemonHabitat.insertMany(pokemonHabitat)
    // console.log('Habitats actualizados')
}