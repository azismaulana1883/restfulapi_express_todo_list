const express = require('express');
const router = express.Router();

const authController = require('../../controllers/authController')

// Register User
router.post('/register', authController.Register);

// Login User
router.post('/login', authController.Login);

module.exports = router;