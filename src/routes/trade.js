const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getTrade,
    createTrade,
    updateTrade,
    deleteTrade,
} = require('../controllers/trade')

router.get('/:user', getTrade)
router.post('/', verifyApiKey, createTrade)
router.put('/', verifyApiKey, updateTrade)
router.delete('/', verifyApiKey, deleteTrade)

module.exports = router