const mongoose = require('mongoose')
const Schema = mongoose.Schema

userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
}, {timestamp: true})

const User = mongoose.model('User', userSchema)