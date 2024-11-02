const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')

require('./strategies/discordStrategy')

const app = express()

// Settings
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Middlewares
app.use(session({
    secret: process.env.PASSPORT_SECRET,
    name: 'serena-discord-oauth2',
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/?retryWrites=true&w=majority&appName=${process.env.MONGODB_DATABASE}`,
    }),
    cookie: {
        maxAge: 60000 * 60 * 24,
    },
}))
app.use(passport.initialize())
app.use(passport.session())

// Global variables
app.use((req, res, next) => {
    app.locals.user = req.user
    next()
})

// Routes
app.use('/', require('./routes/page.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/dashboard', require('./routes/dashboard.routes'))

// API Routes
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/guild', require('./routes/guild.routes'))
app.use('/api/image', require('./routes/image.routes'))

app.use('/api/gif', require('./routes/gif'))
app.use('/api/pokemon-nature', require('./routes/pokemonNature'))
app.use('/api/pokemon-type', require('./routes/pokemonType'))
app.use('/api/pokemon-habitat', require('./routes/pokemonHabitat'))
app.use('/api/pokemon-movement', require('./routes/pokemonMovement'))
app.use('/api/pokemon-form', require('./routes/pokemonForm'))
app.use('/api/pokemon-capture', require('./routes/pokemonCapture'))
app.use('/api/trade', require('./routes/trade'))

module.exports = app