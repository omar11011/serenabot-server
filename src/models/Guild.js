const { Schema, model } = require('mongoose')

const guildSchema = new Schema({
    guildId: {
        type: String,
        required: true,
    },
    isVip: {
        type: Boolean,
        default: false,
    },
    prefix: {
        type: String,
        default: 's!',
    },
    status: {
        type: Schema.Types.Mixed,
        default: {
            xp: 0,
            level: 1,
        },
    },
    spawnChannels: {
        type: [ String ],
        default: null,
    },
}, {
    timestamps: true,
})

module.exports = model('Guild', guildSchema)