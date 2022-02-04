const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    VehicleOwner:{
        type:String,
        required:true
    },
    VehicleModel:{
        type:String,
        required:true
    },
    VehicleNumber:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        required:true
    },
    Seats:{
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