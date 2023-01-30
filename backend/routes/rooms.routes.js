const express = require('express')
const { getRooms, createRoom, updateRoom } = require('../controllers/rooms.controller')

const router = express.Router()

router.route('/').get(getRooms).post(createRoom)
router.route('/:id').patch(updateRoom).put(updateRoom)

module.exports = router