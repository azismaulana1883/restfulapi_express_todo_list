const express = require('express')
const app = express()
const port = 5000

app.get('/', (req,res) => {
    res.send('hello world')
})

app.use(express.json())

app.listen(port, () => {
    console.log(`server is ready your port is : ${port}`)
})

//export routes
const Routes = require('./routes/index');
app.use('/api/v1', Routes)