const mongoose = require('mongoose')

const pincodeSchema = new mongoose.Schema({
    pincode : {
        type : Number
    }
})

module.exports = mongoose.model("pincodes",pincodeSchema)