const { Schema, model } = require('mongoose')

const PokemonSpecie = new Schema({
    key: String,
    name: String,
    pokedex: { type: Number, default: null },
    gender: {
        type: new Schema({
            _id: false,
            male: { type: Number, default: null },
            female: { type: Number, default: null },
        }),
        default: {},
    },
    habitat: { type: Schema.Types.ObjectId, ref: 'PokemonHabitat' },
    growth: { type: Schema.Types.ObjectId, ref: 'PokemonGrowth' },
    eggGroup: { type: [ Schema.Types.ObjectId ], ref: 'PokemonEggGroup' },
    captureRatio: { type: Number, default: 45 },
    friendship: { type: Number, default: 0 },
}, {
    timestamps: true,
})

module.exports = model('PokemonSpecie', PokemonSpecie)