const express = require('express');
const router = express.Router();

// Main Routing
router.get('/', (req, res, next) => {
    res.send({
        message : "success you are on api/v1",
        statusText : "Success",
        statusCode : 200
    });
});

// Auth Routes
const Auth = require('./auth/index')
router.use('/auth', Auth)

const {verifyToken,verifyJWTToken} = require('../middleware/JWT')

// Todo Routes
const Todo = require('./todo/index')
router.use('/todo',[verifyToken,verifyJWTToken], Todo)

// User Routes
const User = require('./user/index')
router.use('/user',[verifyToken,verifyJWTToken], User)

module.exports=router