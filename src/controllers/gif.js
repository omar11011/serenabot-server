const Gif = require('../models/Gif')

const randomGif = async (req, res) => {
    const category = req.params.category
    const gif = await Gif.aggregate([
        { $match: { category } },
        { $sample: { size: 1 } }
    ])

    return res.json(gif)
}

const createGif = async (req, res) => {
    const data = req.body
    if (!data.category || !data.url) return res.json({ error: 'Faltan datos' })

    const urlExist = await Gif.findOne(data)
    if (urlExist) return res.json({ error: 'Gif existente' })

    const newGif = (await Gif.create(data)).toObject()
    return res.json(newGif)
}

module.exports = {
    randomGif,
    createGif,
}