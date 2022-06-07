const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    },
    records: {
        type: [],
    }
})

module.exports = mongoose.model('users', UserSchema)