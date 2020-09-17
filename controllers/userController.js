const User = require('../models/user')

const getAllUsers = async (req, res, next) => {
    try {
        console.log('call find')
        let users = await User.find()
        console.log('end call find')
        res.send(users);
    } catch (err) {
        res.send(err)
    }
}

const saveUser = async (req, res, next) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    })
    try {
        let userDb = await user.save()
        res.send(userDb)
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    getAllUsers,
    saveUser
}