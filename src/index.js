require('dotenv').config()

const app = require('./app')
const database = require('./database')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Server on port', PORT))

database()