module.exports = async (req, res, props) => {
    const { model, route } = props

    try {
        let page = parseInt(req.query.page) || 1
        let limit = parseInt(req.query.limit) || 20
    
        if (page < 1) page = 1
        if (limit < 1) limit = 20
    
        let skip = (page - 1) * limit
        let count = await model.countDocuments()
        let results = await model.find({}).skip(skip).limit(limit).lean()
    
        let response = {
            count,
            next: (skip + limit < count) ? `${process.env.SITE_URL}/api/${route}?page=${page + 1}&limit=${limit}` : null,
            previous: (page > 1) ? `${process.env.SITE_URL}/api/${route}?page=${page - 1}&limit=${limit}` : null,
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