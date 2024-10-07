const Guild = require('../models/Guild')
const getAllData = require('../utils/getAllData')

const getGuilds = async (req, res) => {
    await getAllData(req, res, {
        model: Guild,
        route: 'guild',
    })
}

const createGuild = async (req, res) => {
    let guildData = req.body
    let guild = await Guild.findOne({ guildId: guildData.guildId }).lean()

    if (!guild) guild = (await Guild.create(guildData)).toObject()

    return res.json(guild)
}

const updateGuild = async (req, res) => {
    let { guildId, set = {}, inc = {} } = req.body
    if (!guildId) return res.status(400).json({ error: 'No se especificó el servidor' })

    let guildWanted = await Guild.findOne({ guildId })
    if (!guildWanted) guildWanted = await Guild.create({ guildId, prefix: '!' })

    Object.keys(set).forEach(key => {
        guildWanted[key] = set[key]
    })

    Object.keys(inc).forEach((key) => {
        if (typeof guildWanted[key] === 'number') guildWanted[key] += inc[key]
    })

    await guildWanted.save()
    return res.json({ update: true })
}

module.exports = {
    getGuilds,
    createGuild,
    updateGuild,
}