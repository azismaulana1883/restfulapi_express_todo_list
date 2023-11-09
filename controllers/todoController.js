const modelTodo = require('../models').Todo_list;

async function Read(req,res,next) {
    try {
        const AllTodo = await modelTodo.findAll()

        res.json(AllTodo)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    Read
}