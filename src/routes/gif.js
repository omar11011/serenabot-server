const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    randomGif,
    createGif
} = require('../controllers/gif')

router.post('/', verifyApiKey, createGif)
router.get('/:category', randomGif)

module.exports = router