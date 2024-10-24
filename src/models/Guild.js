const { Schema, model } = require('mongoose')

const guildSchema = new Schema({
    guildId: { type: String, required: true },
    discordData: {
        type: new Schema({
            _id: false,
            id: { type: String, default: null },
            name: { type: String, default: null },
            icon: { type: String, default: null },
            ownerId: { type: String, default: null },
        }),
        default: {},
    },
    config: {
        type: new Schema({
            _id: false,
            prefix: { type: String, default: '!' },
        }),
        default: {},
    },
    features: {
        type: new Schema({
            _id: false,
            isVip: { type: Boolean, default: false },
        }),
        default: {},
    },
    status: {
        type: new Schema({
            _id: false,
            xp: { type: Number, default: 0 },
            level: { type: Number, default: 1 },
        }),
        default: {},
    },
    channels: {
        type: new Schema({
            _id: false,
            spawn: [ String ],
        }),
        default: {},
    },
}, {
    timestamps: true,
})

module.exports = model('Guild', guildSchema)