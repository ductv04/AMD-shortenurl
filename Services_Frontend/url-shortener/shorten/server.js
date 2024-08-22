require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const urlRoutes = require('./routers/url')

const app = express()
app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.log(err))


app.use('/', urlRoutes)

const port = process.env.PORT
app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
  
})
