const { Schema, model } = require('mongoose')

const PokemonHabitat = new Schema({
    name: String,
    description: String,
    image: {
        data: Buffer,
        contentType: String,
    },
}, {
    timestamps: true,
})

module.exports = model('PokemonHabitat', PokemonHabitat)