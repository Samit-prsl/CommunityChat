const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const neighbour = require('./Routes/neighbour')
//const trainer = require('./Routes/trainer')
const app = express()


app.use(express.json())
app.use(cors())
app.use('/api/neighbour',neighbour)
//app.use('/api/trainer',trainer)

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.status(200).json('working')
})

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    dbname : "CommunityChat"
}).then(console.log(`MongoDB connected`)).catch((err)=>{console.log(err);})

app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`);
})