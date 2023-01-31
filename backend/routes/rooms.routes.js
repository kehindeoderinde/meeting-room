const express = require('express')
const { getRooms, createRoom, updateRoom, deleteRoom } = require('../controllers/rooms.controller')

const router = express.Router()

router.route('/').get(getRooms).post(createRoom)
router.route('/:id').patch(updateRoom).put(updateRoom).delete(deleteRoom)

module.exports = router