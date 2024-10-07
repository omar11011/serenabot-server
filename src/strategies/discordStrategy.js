const User = require('../models/User')
const passport = require('passport')
const { Strategy } = require('passport-discord')

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser(async (userId, done) => {
    const user = await User.findOne({ userId })
    if (user) done(null, user.userId)
})

passport.use(new Strategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: '/auth/redirect',
    scope: ['identify', 'guilds', 'email'],
}, async (acessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOne({ userId: profile.id })
        if (user) {
            user.email = profile.email
            user.verified = profile.verified
            user.save()
            return done(null, user.userId)
        }

        const newUser = new User({
            userId: profile.id,
            username: 'user' + Date.now(),
            email: profile.email,
            verified: profile.verified,
        })
        await newUser.save()
        done(null, newUser.userId)
    }
    catch (error) {
        console.log(error)
        return done(error, null)
    }
}))