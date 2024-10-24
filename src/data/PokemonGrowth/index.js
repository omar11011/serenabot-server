const Schema = require('./schema')

module.exports = [
    "Parabólico",
    "Normal",
    "Rápido",
    "Lento",
    "Fluctuante",
    "Errático",
].map(e => new Schema(e))