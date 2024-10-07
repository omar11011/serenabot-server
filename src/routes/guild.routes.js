const { Router } = require('express')
const verifyApiKey = require('../middlewares/verifyApiKey')

const router = Router()

const {
    getGuilds,
    createGuild,
    updateGuild,
} = require('../controllers/guild.controller')

router.post('/', verifyApiKey, createGuild)
router.get('/', getGuilds)
router.put('/', verifyApiKey, updateGuild)

module.exports = router