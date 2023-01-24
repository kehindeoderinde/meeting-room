const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    }, 
    roles: {
        type: [String],
    }
})

exports.User = mongoose.model('User', userSchema)