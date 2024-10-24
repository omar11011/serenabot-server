const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getHabitat,
    getHabitats,
} = require('../controllers/pokemonHabitat')

router.get('/', getHabitats)
router.get('/:name', getHabitat)

module.exports = router