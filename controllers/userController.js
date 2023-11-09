const modelUser = require('../models').User;
console.log(modelUser)

async function Read(req,res,next) {
    try {
        const AllUser = await modelUser.findAll()

        res.json(AllUser)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    Read
}