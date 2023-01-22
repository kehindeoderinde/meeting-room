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
        required: [true, 'A room should have a defined capacity']
    },
    floor: {
        type: Number,
        required: [true, 'A room must be allocated to a certain floor']
    }
})

exports.Room = mongoose.model('Room', roomSchema)