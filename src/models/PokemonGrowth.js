const { Schema, model } = require('mongoose')

const PokemonGrowth = new Schema({
    name: String,
}, {
    timestamps: true,
})

module.exports = model('PokemonGrowth', PokemonGrowth)