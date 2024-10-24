const { set, connect } = require('mongoose')
const loadData = require('./utils/loadData')

module.exports = async () => {
    const MONGODB_USER = process.env.MONGODB_USER
    const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
    const MONGODB_CLUSTER = process.env.MONGODB_CLUSTER
    const MONGODB_DATABASE = process.env.MONGODB_DATABASE
    const URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/?retryWrites=true&w=majority&appName=${MONGODB_DATABASE}`

    try {
        set('strictQuery', true)
        connect(URI, {})
        .then(async () => {
            console.log('Conexión exitosa a MongoDB')
            await loadData()
        })
        .catch((error) => {
            console.error('Error al conectar a MongoDB:', error.message)
        })
    }
    catch(err) {
        console.log(err)
    }
}