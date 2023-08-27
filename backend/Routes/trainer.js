const express = require('express')
const Router = express.Router()
const Trainer = require('../models/trainer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const auth = require('../middleware/auth')
const blog = require('../models/blog')
const Diet = require('../models/diet')


Router.post('/register', async (req,res)=>{
    const { username, password, exp, special, phone } = req.body
    try {
        
        const existUser = await Trainer.findOne({username})
        if(existUser)
        return res.status(409).json('Username already exists')

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newTrainer = new Trainer({username,password:hashedPassword,exp,special,phone})
        await newTrainer.save()

        res.status(200).json("New Trainer added")

    } catch (err) {
        res.status(500).json(err)
    }
})

Router.post('/login', async (req,res)=>{
    const { username,password } = req.body
    try {
        
        const User = await Trainer.findOne({username})//accessing the user from database.
        if(!User)
        return res.status(409).json("Username is wrong")

        const isPasswordTrue = await bcrypt.compare(password,User.password)//User from db and password is accessed and checked
        if(!isPasswordTrue)
        return res.status(409).json("Invalid Password")

        const token = jwt.sign({username : User.username,role : 'Trainer' }, process.env.SECRET_KEY , { expiresIn : "24h"})

        res.status(200).json({message : 'Login successfull',token})

    } catch (err) {
        res.status(500).json(err)
    }
})

Router.post('/postblog',auth, async(req,res)=>{
    try {
        
        const User = await Trainer.findOne({username : req.user.username})
        if(!User)
        return res.status(403).json("Unauthorized")
        
        const { title,desc,tags } = req.body
        try {
            
            const saveBlog = new blog({
                title,
                desc,
                tags
            })
            await saveBlog.save()
            User.blogs.push(saveBlog)
            await User.save()

            res.status(200).json({message : "Blog listed successfully"})

        } catch (err) {
            res.status(500).json("Cant post blog")
        }
        } catch (err) {
            res.status(500).json(err)
         }
    })

Router.get('/blogs',auth,async (req,res)=>{
    try {
        
        const User = await Trainer.findOne({username : req.user.username}).populate("blogs")
        if(!User)
        return res.status(403).json("Unauthorization")

        res.status(200).json({"blogs":User.blogs || []})
    } catch (err) {
        res.status(500).json(err)
    }
})

Router.post('/postdiet',auth,async (req,res)=>{
    try {
        
        const User = await Trainer.findOne({username:req.user.username})
        if(!User)
        return res.status(403).json("Unauthorized")

        try {
            
            const { title,diet,tips } = req.body
            const saveDiet = new Diet({
                title,
                diet,
                tips
            })
            await saveDiet.save()
            User.diet.push(saveDiet)
            await User.save()

            res.status(200).json({"message":"Diet listed"})

        } catch (err) {
            res.status(500).json(err)
        } 
    } catch (err) {
        res.status(500).json(err)
    }
})

Router.get('/diet',auth,async(req,res)=>{
    try {
        
        const User = await Trainer.findOne({username : req.user.username}).populate("diet")
        if(!User)
        return res.status(403).json("Unauthorized")

        res.status(200).json({"diet": User.diet || []})
    } catch (err) {
       console.log(err);
    }
})

module.exports = Router