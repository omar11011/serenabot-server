module.exports = async (req, res, props) => {
    const { model, route } = props

    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 100
    
        if (page < 1) page = 1
        if (limit < 1) limit = 100
    
        const skip = (page - 1) * limit
        const count = await model.countDocuments()
        const results = await model.find({}).skip(skip).limit(limit).lean()
    
        const response = {
            count,
            next: (skip + limit < count) ? `${process.env.SITE_URL}api/${route}?page=${page + 1}&limit=${limit}` : null,
            previous: (page > 1) ? `${process.env.SITE_URL}api/${route}?page=${page - 1}&limit=${limit}` : null,
            results,
        }
    
        return res.status(200).json(response)
    } catch (error) {
        console.error('Error al obtener los datos:', error)
        return res.status(500).json({
            count: 0,
            next: null,
            previous: null,
            results: []
        })
    }
}