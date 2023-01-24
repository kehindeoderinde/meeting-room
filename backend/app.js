const express = require('express')
const morgan = require('morgan')

const meetingsRouter = require('./routes/meetings.routes')
const roomsRouter = require('./routes/rooms.routes')
const usersRouter = require('./routes/users.routes')

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use('/meetings', meetingsRouter)
app.use('/rooms', roomsRouter)
app.use('/users', usersRouter)

module.exports = app