// auth.route.js
const express = require('express');
const User = require('../models/user.models')
const router = express.Router();
const createError = require('http-errors');
const bcrypt = require('bcryptjs')

//registering a new user
router.post('/register', async(req, res ,next)=>{
    try{
        const {email, password}=req.body;
        if(!email  || !password)throw createError.BadRequest();

        const Exists = await User.findOne({email: email})

        if (Exists)throw createError.Conflict(`${email} is  already been used`);
        const hash=await bcrypt.hash(password,10);
        const user = new User({
          email:email,
          password:hash})

        const savedUser = await user.save()
            res.send(savedUser)

    }
    catch (error) {
        console.log(error)
        next(error)
    }

})
router.post('/login', async (req, res) => {
  const {email,password} = req.body
  //find user by email
  try{
    const user = await user.findOne ({email});
    if(!user){
      return res.status(401).statusMessage('Invalid Cridentials')
    }

    const isPasswordValid = await bcrypt.compare (Password,User.Password)
    if(!isPasswordValid){
      throw new Error('Invalid password')

const token = jwt.sign({userId:user_id},JWT_SECRET,{expiresIn: '1h'})

res.status(200).json({type: "Bearer", token:token})
    }
  }
  catch{
    res.send('login route');
  }
});

router.post('/refresh-token', async (req, res) => {
  req.send('refresh-token route')
});
router.get('/users', authMiddleware,( res) => {
  try{
    const users= User.find({},'password');//i excluded the password from being fetched
    res.json(users);
  }catch(error){
  res.status(500).json({messages:'server error'})
  }
  })
router.delete('/logout',async (req, res) => {
  req.send('logout route')
});

module.exports = router;