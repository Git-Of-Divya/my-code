const mongoose = require('mongoose');
// // const schema = mongoose.Schema;
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    userPassword:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('users',userSchema);