const { Schema, model } = require('mongoose')

const PokemonForm = new Schema({
    key: String,
    name: String,
    specie: { type: Schema.Types.ObjectId, ref: 'PokemonSpecie' },
    region: { type: Schema.Types.ObjectId, ref: 'PokemonRegion' },
    type: { type: [ Schema.Types.ObjectId ], ref: 'PokemonType' },
    evolutions: {
        type: [
            new Schema({
                _id: false,
                pokemon: { type: String, required: true },
                requirements: {
                    type: new Schema({
                        _id: false,
                        level: { type: Number, default: 1 },
                        friendship: { type: Number, default: 0 },
                        item: { type: String, default: null },
                        movement: { type: Schema.Types.ObjectId, ref: 'PokemonMovement' },
                    }),
                    default: {},
                },
                options: {
                    type: new Schema({
                        _id: false,
                        isEvolution: { type: Boolean, default: true },
                        inCombat: { type: Boolean, default: false },
                        inTrade: { type: Boolean, default: false },
                    }),
                    default: {},
                },
            }),
        ],
        default: [],
    },
    features: {
        type: new Schema({
            _id: false,
            isMega: { type: Boolean, default: false },
            isGiga: { type: Boolean, default: false },
            isTemporaryForm: { type: Boolean, default: false },
            isLegendary: { type: Boolean, default: false },
            isMythical: { type: Boolean, default: false },
            isUltraBeast: { type: Boolean, default: false },
        }),
        default: {},
    },
    stats: {
        type: new Schema({
            _id: false,
            hp: { type: Number, default: 30 },
            attack: { type: Number, default: 30 },
            defense: { type: Number, default: 30 },
            spattack: { type: Number, default: 30 },
            spdefense: { type: Number, default: 30 },
            speed: { type: Number, default: 30 },
        }),
        default: {},
    },
    movements: {
        type: new Schema({
            _id: false,
            byLevel: {
                type: [
                    new Schema({
                        _id: false,
                        name: String,
                        level: { type: Number, default: 1 },
                    }),
                ],
                default: [],
            },
            byMachine: { type: [ String ], default: [] },
            byTutor: { type: [ String ], default: [] },
        }),
        default: {},
    },
}, {
    timestamps: true,
})

module.exports = model('PokemonForm', PokemonForm)