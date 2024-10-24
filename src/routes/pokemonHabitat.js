const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getHabitat,
} = require('../controllers/pokemonHabitat')

router.get('/:name', getHabitat)

module.exports = router