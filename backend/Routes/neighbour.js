const express = require('express')
const Router = express.Router()
const bcrypt = require('bcryptjs')
const neighbour = require('../models/neighbour')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const faq = require('../models/faq')

Router.post('/register', async (req, res) => {
    try {
      const { username, password,email,profession,address,pincode } = req.body;
  
      // Check if user already exists
      const existingNeighbour = await neighbour.findOne({ username });
      if (existingNeighbour) {
        return res.status(409).json({ message: 'Username already taken' });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create new user
      const newNeighbour =  new neighbour({ username, password: hashedPassword,email,profession,address,pincode });
      await newNeighbour.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({message : 'Something went wrong'});
      //console.log(err);
    }
  });

  Router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the user
      const user = await neighbour.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Check the password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      //Generate JWT token
      const token = jwt.sign({ username: user.username,role:"username" }, process.env.SECRET_KEY, {
        expiresIn : "24h" 
      });
  
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });

Router.get('/profile',auth,async(req,res)=>{
try {
  
  const isAuth = await neighbour.findOne({username : req.user.username})  
  if(!isAuth)
  return res.status(403).json('Unauthorized')

try {
  
  const profile = await neighbour.find()
  res.status(200).json(profile)

} catch (err) {
  res.status(500).json('Cant fetch profile!')
}
} catch (err) {
  res.status(500).json(err)
}
})

Router.put('/profile',auth,async(req,res)=>{

  try {
    
    const isAuth = await neighbour.findOne({username : req.body.username})
    if(isAuth)
    return res.status(403).json('unauthorized')
  
    try {
      
      
    } catch (err) {
      res.status(500).json(err)
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

Router.post('/faq',auth,async(req,res)=>{
  try {
    
    const user = await neighbour.findOne({username : req.user.username})
    if(!user)
    return res.status(403).json("Unauthorized")

    try {
      
      const {question} = req.body
      const savedFaq = new faq({
        question
      })
      await savedFaq.save()
      user.faq.push(savedFaq)
      user.save()
      res.status(200).json('Question posted successfully!')

    } catch (err) {
      res.status(401).json("Cant post question")
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

Router.get('/faq',auth,async(req,res)=>{
  try {
    
    const user = await neighbour.findOne({username: req.user.username}).populate('faq')
    if(!user)
    return res.status(403).json("Unauthorized")

    res.status(200).json({"FAQ":user.faq || []})
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = Router
