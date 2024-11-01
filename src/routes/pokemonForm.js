const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getPokemon,
    getPokemons,
    getPokemonSpawn,
} = require('../controllers/pokemonForm')

router.get('/', getPokemons)
router.get('/spawn', getPokemonSpawn)
router.get('/:name', getPokemon)

module.exports = router