const { Schema, model } = require('mongoose')

const PokemonRegion = new Schema({
    name: String,
    description: String,
    image: String,
}, {
    timestamps: true,
})

module.exports = model('PokemonRegion', PokemonRegion)