const express = require('express')
const { getMeetings } = require('../controllers/meetings.controller')

const router = express.Router()

router.route('/').get(getMeetings)

module.exports = router