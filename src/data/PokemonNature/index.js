const Schema = require('./schema')

module.exports = [
    { name: "Fuerte" },
    { name: "Huraña", effects: { attack: 1, defense: -1 } },
    { name: "Audaz", effects: { attack: 1, speed: -1 } },
    { name: "Firme", effects: { attack: 1, spattack: -1 } },
    { name: "Pícara", effects: { attack: 1, spdefense: -1 } },
    { name: "Osada", effects: { defense: 1, attack: -1 } },
    { name: "Dócil" },
    { name: "Plácida", effects: { defense: 1, speed: -1 } },
    { name: "Agitada", effects: { defense: 1, spattack: -1 } },
    { name: "Floja", effects: { defense: 1, spdefense: -1 } },
    { name: "Miedosa", effects: { speed: 1, attack: -1 } },
    { name: "Activa", effects: { speed: 1, defense: -1 } },
    { name: "Seria" },
    { name: "Alegre", effects: { speed: 1, spattack: -1 } },
    { name: "Ingenua", effects: { speed: 1, spdefense: -1 } },
    { name: "Modesta", effects: { spattack: 1, attack: -1 } },
    { name: "Afable", effects: { spattack: 1, defense: -1 } },
    { name: "Mansa", effects: { spattack: 1, speed: -1 } },
    { name: "Tímida" },
    { name: "Alocada", effects: { spattack: 1, spdefense: -1 } },
    { name: "Serena", effects: { spdefense: 1, attack: -1 } },
    { name: "Amable", effects: { spdefense: 1, defense: -1 } },
    { name: "Grosera", effects: { spdefense: 1, speed: -1 } },
    { name: "Cauta", effects: { spdefense: 1, spattack: -1 } },
    { name: "Rara" }
].map(e => new Schema(e))