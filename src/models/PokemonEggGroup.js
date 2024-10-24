const { Schema, model } = require('mongoose')

const PokemonEggGroup = new Schema({
    name: String,
}, {
    timestamps: true,
})

module.exports = model('PokemonEggGroup', PokemonEggGroup)