const mongoose = require('mongoose')

const profileTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    brandname:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports =mongoose.model('mytable1', profileTemplate)