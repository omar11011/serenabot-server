const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        default: 'trainer',
    },
    status: {
        type: Schema.Types.Mixed,
        default: {
            xp: 0,
            level: 1,
        },
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