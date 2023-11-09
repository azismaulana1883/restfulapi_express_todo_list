const modelUser = require('../models').User;
const Cryptr = require('cryptr');
const cryptr = new Cryptr('secret-key-access');
const JWT = require('jsonwebtoken');

async function Register(req, res, next) {
    try {
        const { nama, username, password } = req.body;

        const getUsers = await modelUser.findOne({
            where: {
                username: req.body.username
            }
        });
        console.log(getUsers)
        
        if (getUsers) {
            res.status(400).send({
                message : "data sudah ada",
                sendText : "data sudah terdaftar",
                statusCode: 400
            })
        } else {
            let dataPassingToDB = {
                nama: nama,
                username: username,
                password: cryptr.encrypt(password)
            }
    
            let createdData = await modelUser.create(dataPassingToDB);
    
            if (!createdData.dataValues) {
                res.status(400).send({
                    message: 'Wrong username or password',
                    statusCode: 400
                });
            } else {
                res.send({
                    message: 'Success',
                    statusCode: 200
                });
            }
        }
    } catch (error) {
        next(error);
    }
}

async function Login(req, res, next) {
    console.log(req.body.username)
    const getUsers = await modelUser.findOne({
        where: {
            username: req.body.username
        }
    })

    if ( !getUsers ) {
        res.status(400).send({
            message: 'Data is not exist!',
            statusCode: 400
        })
    } else {
        let passwordUser = cryptr.decrypt(getUsers.dataValues.password)
        if ( req.body.password !== passwordUser ) {
            res.status(400).send({
                message: 'Username or Password is wrong!',
                statusCode: 400
            })
        } else {
            let expiredToken = Math.floor(Date.now() / 1000) + (60 * 60)
            let createAccessToken = JWT.sign({
                exp: expiredToken,
                data: {
                    user: getUsers.dataValues.username,
                    username: getUsers.dataValues.username,
                    no: getUsers.dataValues.id,
                }
            }, 'secret-key-access')

            let dataPassingClient = {
                access_token: createAccessToken, // access token expired 1 day
                refresh_token: createAccessToken, // refresh token expired 1 month
                expired_date: expiredToken,
                user: getUsers.dataValues.username,
                id: getUsers.dataValues.id,
            }

            res.status(200).send({
                message: 'Successfull to login user!',
                statusText: 'Successfull to login user!',
                statusCode: 200,
                data: dataPassingClient
            })
        }
    }
}

module.exports = {
    Register,
    Login
}
