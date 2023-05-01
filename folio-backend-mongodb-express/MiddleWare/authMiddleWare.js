const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      // const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const verifyToken =jwt.verify(token,process.env.JWT_SECRET, {expiresIn:"2d"})

      // console.log(verifyToken.userId)
      // Get user from the token

      user= await User.findOne(verifyToken.userId)
      // req.user = await User.findById(verifyToken.userId)
      console.log(user)

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }
