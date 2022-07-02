const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT


app.get('/', (req,res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log("Let's get this Bread")
})