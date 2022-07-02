const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

app.use('/places', require('./controllers/places'))

app.get('/', (req,res) => {
    res.send('Hello world')
})

addEventListener.get ('*', (req,res) => {
    res.status(404).send('<h1>404 page</h1>')
})

app.listen(PORT, () => {
    console.log("Let's get this Bread")
})