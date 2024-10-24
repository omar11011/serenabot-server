const User = require('../models/User')
const getAllData = require('../utils/getAllData')

const getUser = async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ userId: id }).lean()
    return res.json(user)
}

const getUsers = async (req, res) => {
    await getAllData(req, res, {
        model: User,
        route: 'user',
    })
}

const createUser = async (req, res) => {
    let userData = req.body
    let user = await User.findOne({ userId: userData.userId }).lean()

    if (!user) user = (await User.create(userData)).toObject()

    return res.json(user)
}

const updateUser = async (req, res) => {
    let { userId, set = {}, inc = {} } = req.body
    if (!userId) return res.status(400).json({ error: 'No se especificó el usuario' })

    let userWanted = await User.findOneAndUpdate(
        { userId },
        { 
            $set: set, 
            $inc: inc 
        },
        { new: true, upsert: true }
    )

    return res.json(userWanted)
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
}