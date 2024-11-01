const { Schema, model } = require('mongoose')

const PokemonType = new Schema({
    key: String,
    name: String,
    emoji: String,
    effectiveness: {
        type: new Schema({
            _id: false,
            superEffective: [ String ],
            ineffective: [ String ],
            doesNotAffect: [ String ],
        }),
        default: {},
    },
    image: String,
}, {
    timestamps: true,
})

module.exports = model('PokemonType', PokemonType)