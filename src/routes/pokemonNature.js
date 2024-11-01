const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getNature,
    getNatures,
    getRandomNature,
} = require('../controllers/pokemonNature')

router.get('/', getNatures)
router.get('/random', getRandomNature)
router.get('/:name', getNature)

module.exports = router