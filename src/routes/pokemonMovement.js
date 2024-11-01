const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getMovement,
    getMovements,
} = require('../controllers/pokemonMovement')

router.get('/', getMovements)
router.get('/:name', getMovement)

module.exports = router