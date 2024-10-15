const { Router } = require('express')

const router = Router()

const { random, searched } = require('../controllers/image.controller')

router.get('/', searched)
router.get('/random', random)

module.exports = router