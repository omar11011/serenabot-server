const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getCaptures,
    createPokemon,
    updatePokemon,
} = require('../controllers/pokemon.controller')

router.get('/captures/:user', getCaptures)
router.post('/', verifyApiKey, createPokemon)
router.put('/', verifyApiKey, updatePokemon)

module.exports = router