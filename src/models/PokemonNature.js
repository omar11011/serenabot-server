const { Schema, model } = require('mongoose')

const PokemonNature = new Schema({
    name: String,
    effects: {
        type: new Schema({
            attack: { type: Number, default: 0 },
            defense: { type: Number, default: 0 },
            spattack: { type: Number, default: 0 },
            spdefense: { type: Number, default: 0 },
            speed: { type: Number, default: 0 },
        }),
        default: {},
    },
}, {
    timestamps: true,
})

module.exports = model('PokemonNature', PokemonNature)