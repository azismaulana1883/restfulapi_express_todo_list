const express = require('express');
const router = express.Router();

const todoController = require('../../controllers/todoController')

// Read All Todo
router.get('/', todoController.Read);

module.exports = router;