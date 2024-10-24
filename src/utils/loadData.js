const PokemonNature = require('../models/PokemonNature')
const PokemonEggGroup = require('../models/PokemonEggGroup')
const PokemonGrowth = require('../models/PokemonGrowth')
const PokemonHabitat = require('../models/PokemonHabitat')
const PokemonRegion = require('../models/PokemonRegion')

const pokemonNature = require('../data/PokemonNature')
const pokemonEggGroup = require('../data/PokemonEggGroup')
const pokemonGrowth = require('../data/PokemonGrowth')
const pokemonHabitat = require('../data/PokemonHabitat')
const pokemonRegion = require('../data/PokemonRegion')

module.exports = async () => {
    return
    // Naturaleza
    await PokemonNature.deleteMany({})
    await PokemonNature.insertMany(pokemonNature)
    console.log('Naturalezas actualizadas.')

    // // Grupo Huevo
    await PokemonEggGroup.deleteMany({})
    await PokemonEggGroup.insertMany(pokemonEggGroup)
    console.log('Grupos Huevo actualizados.')

    // Crecimiento
    await PokemonGrowth.deleteMany({})
    await PokemonGrowth.insertMany(pokemonGrowth)
    console.log('Crecimientos actualizados.')

    // Habitat
    await PokemonHabitat.deleteMany({})
    await PokemonHabitat.insertMany(pokemonHabitat)
    console.log('Habitats actualizados')

    // Habitat
    await PokemonRegion.deleteMany({})
    await PokemonRegion.insertMany(pokemonRegion)
    console.log('Regiones actualizadas')
}