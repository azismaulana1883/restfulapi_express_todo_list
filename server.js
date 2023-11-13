const express = require('express')
const app = express()
const port = 5000
const morgan = require('morgan')
const cors = require('cors')

app.use(morgan('dev'))
app.use(cors())

app.get('/', (req,res) => {
    res.send({
        message : "Succes You Are in Main Routing",
        StatusText : "Success",
        StatusCode : 200
    })
})

app.use(express.json())

app.listen(port, () => {
    console.log(`server is ready your port is : ${port}`)
})

//export routes
const Routes = require('./routes/index');
app.use('/api/v1', Routes)