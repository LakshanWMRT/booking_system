const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    FullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('mytable',signUpTemplate)