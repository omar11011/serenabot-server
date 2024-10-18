const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    createPokemon,
} = require('../controllers/pokemon.controller')

router.post('/', verifyApiKey, createPokemon)

module.exports = router