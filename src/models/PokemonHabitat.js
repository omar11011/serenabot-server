const { Schema, model } = require('mongoose')

const PokemonHabitat = new Schema({
    key: String,
    name: String,
    description: String,
    emoji: String,
}, {
    timestamps: true,
})

module.exports = model('PokemonHabitat', PokemonHabitat)