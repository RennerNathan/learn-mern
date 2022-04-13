const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// if frontend hits /api/goals, it'll look into goal routes
app.use('/api/goals', require('./routes/goalRoutes'))

// override express default error handler
app.use(errorHandler)

app.listen(port, () => console.log(`server started on ${port}`))