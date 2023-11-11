const modelTodo = require('../models').Todo_list;

async function Read(req, res, next) {
    try {
        const userIdFromToken = req.tokenUser.data.no; 
        const AllTodo = await modelTodo.findAll({
            where: {
                user_id: userIdFromToken,
            },
        });

        res.send({
            message: 'Here your data Todo',
            statusText: 'Here your data Todo',
            statusCode: 200,
            data: AllTodo,
        });
    } catch (error) {
        next(error);
    }
}

async function CreateTodo(req, res, next) {
    const {title, status} = req.body

    try {
        let createTodo = {
            "user_id": req.tokenUser.data.no,
            "title": title,
            "status": status,
            "created_date": new Date(),
            "updated_date": new Date(),
        }
        console.log(createTodo)
    
        let createData = await modelTodo.create(createTodo)
        
        if ( !createData) {
            res.status(400)
        } else {
            res.send({
                message: 'Successfull to create data Todo!',
                statusText: 'Successfull to create data Todo!',
                statusCode: 200,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

async function UpdateTodo(req, res, next) {
    try {
        const todoId = req.params.id;
        const { title, status } = req.body;
        const userIdFromToken = req.tokenUser.data.no;
        const existingTodo = await modelTodo.findOne({
            where: {
                id: todoId,
                user_id: userIdFromToken,
            },
        });

        if (!existingTodo) {
            return res.status(404).json({
                message: 'Todo not found',
                statusCode: 404,
            });
        }

        existingTodo.title = title;
        existingTodo.status = status;
        await existingTodo.save();

        res.json({
            message: 'Todo updated successfully',
            statusCode: 200,
        });
    } catch (error) {
        next(error);
    }
}

async function DeleteTodo(req, res, next) {
    try {
        const userIdFromToken = req.tokenUser.data.no;
        const todoId = req.params.id;

        const existingTodo = await modelTodo.findOne({
            where: {
                id: todoId,
                user_id: userIdFromToken,
            },
        });

        if (!existingTodo) {
            return res.status(404).json({
                message: 'Todo not found',
                statusCode: 404,
            });
        }

        await existingTodo.destroy();

        res.json({
            message: 'Todo deleted successfully',
            statusCode: 200,
        });
    } catch (error) {
        next(error);
    }
}

async function DeleteAll(req, res, next) {
    try {
        const userId = req.tokenUser.data.no;

        // Hapus semua todo berdasarkan user_id
        const deletedRowCount = await modelTodo.destroy({
            where: {
                user_id: userId,
            },
        });

        if (deletedRowCount === 0) {
            return res.status(404).json({
                message: 'No Todos found for the user',
                statusCode: 404,
            });
        }

        res.status(200).send({
            message: "All Delete Complete",
            statusText : "All Data Has Been Deleted",
            statusCode : 200
        })
    } catch (error) {
        next(error);
    }
}

async function Show(req, res, next) {
    try {
        const todoId = req.params.id;
        const userIdFromToken = req.tokenUser.data.no; 

        const existingTodo = await modelTodo.findOne({
            where: {
                id: todoId,
                user_id: userIdFromToken,
            },
        });

        if (!existingTodo) {
            return res.status(404).json({
                message: 'Todo not found',
                statusCode: 404,
            });
        } else {
            res.json(existingTodo);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    Read,
    Show,
    CreateTodo,
    UpdateTodo,
    DeleteTodo,
    DeleteAll
}