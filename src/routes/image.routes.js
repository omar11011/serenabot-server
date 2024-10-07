const { Router } = require('express')

const router = Router()

const randomImage = require('../controllers/image.controller')

router.get('/random', randomImage)

module.exports = router