const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getType,
    getTypes,
} = require('../controllers/pokemonType')

router.get('/', getTypes)
router.get('/:name', getType)

module.exports = router