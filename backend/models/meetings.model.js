const { default: mongoose } = require("mongoose");

const meetingSchema = new mongoose.Schema({
    'name' : {
        type: String,
        required: [true, 'A meeting must have a name']
    }
})

exports.Meeting = mongoose.model('Meeting', meetingSchema)