const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController')

// Read All Todo
router.get('/', userController.Read);

module.exports = router;