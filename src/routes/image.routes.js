const { Router } = require('express')

const router = Router()

const { random, searched, getImage } = require('../controllers/image.controller')

router.get('/', searched)
router.get('/random', random)
router.get('/:folder/:image', getImage)

module.exports = router