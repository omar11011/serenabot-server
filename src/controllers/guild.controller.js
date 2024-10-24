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
        
    let guildWanted = await Guild.findOneAndUpdate(
        { guildId },
        { 
            $set: set, 
            $inc: inc 
        },
        { new: true, upsert: true }
    )

    return res.json(guildWanted)
}

module.exports = {
    getGuilds,
    createGuild,
    updateGuild,
}