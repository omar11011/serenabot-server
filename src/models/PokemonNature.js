const { Schema, model } = require('mongoose')

const PokemonNature = new Schema({
    name: String,
}, {
    timestamps: true,
})

module.exports = model('PokemonNature', PokemonNature)