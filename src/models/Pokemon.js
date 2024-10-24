const { Schema, model } = require('mongoose')

const pokemonSchema = new Schema({
    pokemon: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    traits: {
        nickname: { type: String, default: null },
        gender: { type: String, default: null },
        nature: { type: String, default: null },
    },
    status: {
        xp: { type: Number, default: 0 },
        level: { type: Number, default: 1 },
        friendship: { type: Number, default: 0 },
        iv: { type: Number, default: 0 },
    },
    features: {
        isShiny: { type: Boolean, default: false },
        isDynamax: { type: Boolean, default: false },
        isLegendary: { type: Boolean, default: false },
        isMythical: { type: Boolean, default: false },
        isUltraBeast: { type: Boolean, default: false },
    },
    stats: {
        hp: { type: Number, default: 0 },
        attack: { type: Number, default: 0 },
        defense: { type: Number, default: 0 },
        spattack: { type: Number, default: 0 },
        spdefense: { type: Number, default: 0 },
        speed: { type: Number, default: 0 }
    },
    effortValues: {
        hp: { type: Number, default: 0 },
        attack: { type: Number, default: 0 },
        defense: { type: Number, default: 0 },
        spattack: { type: Number, default: 0 },
        spdefense: { type: Number, default: 0 },
        speed: { type: Number, default: 0 }
    },
    options: {
        isSelected: { type: Boolean, default: false },
        isFavorite: { type: Boolean, default: false },
    },
    movements: {
        type: [
            {
                _id: false,
                name: { type: String, default: null },
                xp: { type: Number, default: 0 },
                level: { type: Number, default: 1 },
                type: { type: String, default: 'nivel' },
            },
        ],
        default: [],
    },
}, {
    timestamps: true
})

module.exports = model('Pokemon', pokemonSchema)
