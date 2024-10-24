const Schema = require('./schema')

module.exports = [
    "Desconocido",
    "Ditto",
    "Planta",
    "Bicho",
    "Volador",
    "Humanoide",
    "Mineral",
    "Amorfo",
    "Campo",
    "Agua1",
    "Agua2",
    "Agua3",
    "Monstruo",
    "Hada",
    "Dragon"
].map(e => new Schema(e))