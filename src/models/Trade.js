const { Schema, model } = require('mongoose')

const tradeSchema = new Schema({
    guild: { type: Schema.Types.ObjectId, ref: 'Guild' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    otherUser: { type: Schema.Types.ObjectId, ref: 'User' },
    money: { type: Number, default: 0 },
    pokemon: {
        type: [
            new Schema({
                _id: false,
                id: String,
                name: String,
            })
        ],
        default: [],
    },
    items: {
        type: [
            new Schema({
                _id: false,
                id: String,
                name: String,
            })
        ],
        default: [],
    },
    current: { type: Boolean, default: true },
    accept: { type: Boolean, default: false },
}, {
    timestamps: true,
})

module.exports = model('Trade', tradeSchema)