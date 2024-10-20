const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    discordData: {
        id: { type: String, default: null },
        username: String,
        globalName: String,
        discriminator: String,
        avatar: String,
        email: String,
        verified: { type: Boolean, default: false },
    },
    status: {
        level: { type: Number, default: 1 },
        xp: { type: Number, default: 0 },
    },
    features: {
        isVip: { type: Boolean, default: false },
        isAdmin: { type: Boolean, default: false },
        isOwner: { type: Boolean, default: false },
    },
    balance: {
        type: Schema.Types.Mixed,
        default: {
            money: 0,
            gems: 0,
        },
    },
}, {
    timestamps: true,
})

module.exports = model('User', userSchema)