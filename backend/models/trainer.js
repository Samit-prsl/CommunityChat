const mongoose = require('mongoose')

const trainerModel = new mongoose.Schema({
    username : {
        type : String,
        unique : true
    },
    password : {
        type : String
    },
    exp : {
        type : String
    },
    special : {
        type : String
    },
    phone : {
        type : Number,
        unique : true
    },
    blogs : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Blogs"
        }
    ],
    diet : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "diets"
        }
    ]
})

module.exports = mongoose.model("Trainers",trainerModel)