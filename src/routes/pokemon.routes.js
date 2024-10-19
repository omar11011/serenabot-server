const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getCaptures,
    createPokemon,
} = require('../controllers/pokemon.controller')

router.get('/captures/:user', getCaptures)
router.post('/', verifyApiKey, createPokemon)

module.exports = router