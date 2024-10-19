const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getUser,
    getUsers,
    createUser,
    updateUser,
} = require('../controllers/user.controller')

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', verifyApiKey, createUser)
router.put('/', verifyApiKey, updateUser)

module.exports = router