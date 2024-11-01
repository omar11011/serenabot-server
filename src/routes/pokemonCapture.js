const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getCapture,
    getCaptures,
    createPokemon,
    updatePokemon,
} = require('../controllers/pokemonCapture')

router.get('/:id', getCapture)
router.get('/user/:user', getCaptures)
router.post('/', verifyApiKey, createPokemon)
router.put('/', verifyApiKey, updatePokemon)

module.exports = router