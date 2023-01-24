const { User } = require("../models/users.model")

exports.createUser = (req, res) => {
    User.create(req.body)
    .then(doc => {
        res.status(200).json({
            status: "success",
            data: {
                user: doc
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

exports.getUsers = (_, res) => {
    User.find()
    .then(doc => {
        res.status(200).json({
            status: "success",
            data: {
                user: doc
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