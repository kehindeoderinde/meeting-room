const { Room } = require("../models/rooms.model")

exports.getRooms = (req, res) => {
    res.send('All rooms')
}

exports.createRoom = (req, res) => {
    Room.create(req.body)
    .then(doc => {
        res.status(200).json({
            status: "success",
            data: {
                room: doc
            }
        })
    })
    .catch(err => {
        res.status(400).json({
            status: "failed",
            error: err
        })
    })
}