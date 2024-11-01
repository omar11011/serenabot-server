const { Schema, model } = require('mongoose')

const PokemonRegion = new Schema({
    key: String,
    name: String,
    description: String,
}, {
    timestamps: true,
})

module.exports = model('PokemonRegion', PokemonRegion)