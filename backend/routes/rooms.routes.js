const express = require('express')
const { getRooms, createRoom } = require('../controllers/rooms.controller')

const router = express.Router()

router.route('/').get(getRooms).post(createRoom)

module.exports = router