const express = require('express');
const router = express.Router();

const {protect} = require("../MiddleWare/authMiddleWare")

const {
    registerUser,
    loginUser,
    getMe
} = require('../controllers/userControllers')


router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/', protect, getMe)

module.exports =  router;
