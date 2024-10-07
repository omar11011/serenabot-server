module.exports = (req, res, next) => {
    const { apiKey } = req.body

    if (!apiKey) {
        return res.status(400).json({ error: 'apiKey is required' })
    }

    if (apiKey !== process.env.APIKEY) {
        return res.status(403).json({ error: 'Invalid apiKey' })
    }

    next()
}