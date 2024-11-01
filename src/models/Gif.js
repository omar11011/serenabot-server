const { Schema, model } = require('mongoose')

const gifSchema = new Schema({
    category: String,
    url: String,
}, {
    timestamps: true,
})

module.exports = model('Gif', gifSchema)