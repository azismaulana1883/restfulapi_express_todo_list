const express = require('express');
const router = express.Router();

// Main Routing
router.get('/', (req, res, next) => {
    res.send('Welcome to main routing');
});

// Auth Routes
const Auth = require('./auth/index')
router.use('/auth', Auth)
// Todo Routes

const Todo = require('./todo/index')
router.use('/todo', Todo)

// User Routes
const User = require('./user/index')
router.use('/user', User)

module.exports=router