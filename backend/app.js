const express = require('express')
const morgan = require('morgan')

const meetingsRouter = require('./routes/meetings.routes')
const roomsRouter = require('./routes/rooms.routes')

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use('/meetings', meetingsRouter)
app.use('/rooms', roomsRouter)

module.exports = app