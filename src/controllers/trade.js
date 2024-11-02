const Trade = require('../models/Trade')

const getTrade = async (req, res) => {
    const userId = req.params.user
    const user = await Trade.findOne({
        user: userId,
        current: true,
    }).lean().populate('guild user otherUser')
    if (!user) return res.json({ user: null })

    const otherUser = await Trade.findOne({
        user: user.otherUser,
        current: true,
    }).lean().populate('guild user otherUser')
    if (!otherUser) {
        await Trade.findByIdAndDelete(user._id)
        return res.json({ user: null, otherUser: null })
    }

    return res.json({ user, otherUser })
}

const createTrade = async (req, res) => {
    let data = req.body
    let trade = await Trade.findOne({
        user: data.user,
        current: true,
    }).lean()

    if (trade) return res.json({ error: 'No puedes hacer otro intercambio hasta que termines el actual.' })

    let otherTrade = await Trade.findOne({
        user: data.otherUser,
        current: true,
    }).lean()
    if (otherTrade) return res.json({ error: 'El usuario actualmente se encuentra en otro intercambio.' })
        
    await Trade.create({
        guild: data.guild,
        user: data.user,
        otherUser: data.otherUser,
    })
    await Trade.create({
        guild: data.guild,
        user: data.otherUser,
        otherUser: data.user,
    })

    return res.json({ error: false })
}

const updateTrade = async (req, res) => {
    let { user, set = {}, inc = {} } = req.body
    if (!user) return res.status(400).json({ error: 'No se especificó el usuario' })
        
    let trade = await Trade.findOneAndUpdate(
        {
            user: user,
            current: true,
        },
        { 
            $set: set, 
            $inc: inc,
        },
        { new: true, upsert: true }
    )

    return res.json(trade)
}

const deleteTrade = async (req, res) => {
    const { id } = req.body
    if (!id) return res.json({ error: 'No se especificó el ID' })

    await Trade.findByIdAndDelete(id)

    return res.json({ error: false })
}

module.exports = {
    getTrade,
    createTrade,
    updateTrade,
    deleteTrade,
}