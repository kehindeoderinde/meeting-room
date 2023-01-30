const { default: mongoose } = require("mongoose");

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'A name is required to create a room']
    },
    location: {
        type: String,
        required: [true, 'A room should have a location']
    },
    capacity: {
        type: Number,
        min: 4,
        max: 10,
        required: [true, 'A room should have a defined capacity']
    },
    floor: {
        type: Number,
        required: [true, 'A room must be allocated to a certain floor']
    },
    created_at: {
        type: Date,
        default: Date.now(),
        select: false
    },
    deleted_at: {
        type: Date,
        select: false
    },
})

exports.Room = mongoose.model('Room', roomSchema)