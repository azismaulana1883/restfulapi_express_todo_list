const express = require('express');
const router = express.Router();

const todoController = require('../../controllers/todoController')

const {verifyToken,verifyJWTToken} = require('../../middleware/JWT')

// Read All Todo
router.get('/', todoController.Read);

//read todo detail
router.get('/:id', [verifyToken, verifyJWTToken],todoController.Show);

//Create todo
router.post('/', [verifyToken, verifyJWTToken],todoController.CreateTodo);

//Update existing todo
router.put('/:id', [verifyToken, verifyJWTToken],todoController.UpdateTodo);

//Delete All todo
router.delete('/delete', [verifyToken,verifyJWTToken],todoController
.DeleteAll)

//Delete existing todo
router.delete('/:id', [verifyToken, verifyJWTToken],todoController.DeleteTodo);


module.exports = router;