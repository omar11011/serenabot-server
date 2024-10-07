const { Router } = require('express')
const { home, staff, commands, store } = require('../controllers/page.controller')

const router = Router()

router.get('/', home)
router.get('/staff', staff)
router.get('/commands', commands)
router.get('/store', store)

module.exports = router