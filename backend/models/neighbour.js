const mongoose = require('mongoose')
const express = require('express')
const app = express()

const neighbourSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true
    },
    password : {
        
    },
    email : {
        type : String
    },
    profession : {
        type : String
    },
    address : {
        type : String
    },
    pincode : {
        type : Number,
    },
    faq : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "faq"
        }
    ]
})

module.exports = mongoose.model("Neighbours",neighbourSchema)