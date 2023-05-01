const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel')

const registerUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({
        email,
        password: hashedPassword
    })

    if(user) {
        res.json({
            _id: user.id,
            email: user.email,
            token: generateToken(user.id, email)
        })
    }
    else{
        res.status(400)
        throw new Error("invalid data")
    }
})

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user =  await User.findOne({email})
    
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            email: user.email,
            token: generateToken(user.id, email)
        })
        console.log("yes")
    } else {
        res.status(401).json({message: "Invalid credentials"})
        
    }
    
})

const getMe = asyncHandler(async(req, res) => {
      res.json(user)
})


const generateToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}