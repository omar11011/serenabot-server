const { Schema, model } = require('mongoose')

const guildSchema = new Schema({
    guildId: {
        type: String,
        required: true,
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
}, {
    timestamps: true,
})

module.exports = model('Guild', guildSchema)