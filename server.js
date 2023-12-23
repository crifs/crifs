require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// routes
const authRoutes = require('./routes/auth')
const transactionRoutes = require('./routes/transaction')
const virtualaccountRoutes = require('./routes/virtualaccounts')

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use('/api/auths', authRoutes)
app.use('/api/transactions', transactionRoutes)
app.use('/api/virtualaccounts', virtualaccountRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('successfully connected to the db')
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })