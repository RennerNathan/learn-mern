const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

// if frontend hits /api/goals, it'll look into goal routes
app.use('/api/goals', require('./routes/goalRoutes'))


app.listen(port, () => console.log(`server started on ${port}`))