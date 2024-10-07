const User = require('../models/User')

const home = async (req, res) => {
    return res.render('home', {
        navbar: 'home',
    })
}

const staff = async (req, res) => {
    let admins = await User.find({ role: { $ne: null } }).select('userId username role').lean()

    admins = admins.map(e => {
        if (e.role === 'owner') e.role = "Founder & CEO / Programmer"
        if (e.role === 'programmer') e.role = "Programmer"
        if (e.role === 'admin') e.role = "Admin"
        return e
    })

    return res.render('staff', {
        admins,
        navbar: 'staff',
    })
}

const commands = async (req, res) => {
    return res.render('commands', {
        navbar: 'commands',
    })
}

const store = async (req, res) => {
    return res.render('store', {
        navbar: 'store',
    })
}

module.exports = {
    home,
    staff,
    commands,
    store,
}