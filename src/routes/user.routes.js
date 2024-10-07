const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getUsers,
    createUser,
    updateUser,
} = require('../controllers/user.controller')

router.get('/', getUsers)
router.post('/', verifyApiKey, createUser)
router.put('/', verifyApiKey, updateUser)

module.exports = router