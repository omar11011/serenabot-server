const { Schema, model } = require('mongoose')

const PokemonMovement = new Schema({
    name: String,
    key: String,
    class: { type: String, default: 'Físico' },
    type: { type: Schema.Types.ObjectId, ref: 'PokemonType' },
    power: { type: Number, default: 0 },
    precision: { type: Number, default: 100 },
    priority: { type: Number, default: 0 },
    hits: { type: Number, default: 1 },
    effects: {
        type: [
            new Schema({
                _id: false,
                stat: { type: String, default: 'attack' },
                toUser: { type: Boolean, default: false },
                points: { type: Number, default: -1 },
                probability: { type: Number, default: 100 },
            }),
        ],
        default: [],
    },
    zMove: {
        type: new Schema({
            _id: false,
            pokemon: String,
            power: { type: Number, default: 100 },
            type: String,
            item: String,
        }),
        default: null,
    },
}, {
    timestamps: true,
})

module.exports = model('PokemonMovement', PokemonMovement)