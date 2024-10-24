const { Schema, model } = require('mongoose')

const PokemonHabitat = new Schema({
    name: String,
    description: String,
    image: String,
}, {
    timestamps: true,
})

module.exports = model('PokemonHabitat', PokemonHabitat)