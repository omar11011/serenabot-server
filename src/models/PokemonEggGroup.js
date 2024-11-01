const { Schema, model } = require('mongoose')

const PokemonEggGroup = new Schema({
    key: String,
    name: String,
}, {
    timestamps: true,
})

module.exports = model('PokemonEggGroup', PokemonEggGroup)