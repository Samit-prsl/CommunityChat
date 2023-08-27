const mongoose = require('mongoose')

const faqSchema = new mongoose.Schema({
    question : {
        type : String,
        unique : true
    }
})

module.exports = mongoose.model('faq',faqSchema)