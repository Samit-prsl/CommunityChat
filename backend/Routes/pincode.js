const express = require('express')
const Router = express.Router()
const pin = require('../models/pincode')

Router.post('/',async(req,res)=>{
    try {

        const { pincode } = req.body
        const newPincode = new pin({ pincode })
        await newPincode.save()
        res.status(200).json("pincode saved")

    } catch (err) {
        res.status(500).json(err)
    }
})

Router.get('/',async(req,res)=>{
    try {
        
        const savedPincode = await pin.find()
        res.status(200).json(savedPincode)

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = Router