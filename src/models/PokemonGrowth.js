const { Schema, model } = require('mongoose')

const PokemonGrowth = new Schema({
    key: String,
    name: String,
}, {
    timestamps: true,
})

module.exports = model('PokemonGrowth', PokemonGrowth)