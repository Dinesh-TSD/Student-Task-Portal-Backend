const express = require ('express')
const app =express()
const students = require('./routes/students')
const auth = require('./routes/auth')
const tasks = require('./routes/task')
const errorMiddleware = require('./middlewares/error')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv =require('dotenv').config();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors("*"))
app.use(cookieParser()) 


app.use('/api/v1/',students)
app.use('/api/v1/',auth)
app.use('/api/v1/',tasks)


app.use(errorMiddleware)

module.exports = app;