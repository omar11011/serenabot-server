const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    userId: { type: String, required: true },
    discordData: {
        type: new Schema({
            _id: false,
            id: { type: String, default: null },
            username: { type: String, default: null },
            globalName: { type: String, default: null },
            discriminator: { type: String, default: null },
            avatar: { type: String, default: null },
            email: { type: String, default: null },
            verified: { type: Boolean, default: false },
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
    roles: {
        type: new Schema({
            _id: false,
            isVip: { type: Boolean, default: false },
            isAdmin: { type: Boolean, default: false },
            isOwner: { type: Boolean, default: false },
            isProgrammer: { type: Boolean, default: false },
        }),
        default: {},
    },
    balance: {
        type: new Schema({
            _id: false,
            money: { type: Number, default: 0 },
            gems: { type: Number, default: 0 },
        }),
        default: {},
    },
}, {
    timestamps: true,
})

module.exports = model('User', userSchema)