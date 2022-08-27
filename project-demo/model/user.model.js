const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userMobile: {
        type: String,
        required: true,
        unique: true,
        length: 10
    },
    userAddress: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
        default:true
    },
    userJoinDate:{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("user", userSchema);