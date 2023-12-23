// purpose of file: all routes for transactions

const express = require('express')
// import other packages you need to make use of

// import all functions from controller
const { 
    sampleFunc
} = require('./../controllers/transactionController')

// it's not every route that needs authenticate/token to make request to
const requireAuth = require('./../middleware/requireAuth')

const router = express.Router()




// every route that does not need token authentication should come above the --| router.use(requireAuth) |-- line of code (and just so you know the token would be generated once a user login or create account so you don't need to worry about that

// GET a sample post route
router.post('/routename', sampleFunc)





// require auth for all other route
router.use(requireAuth)

// and every route that does need token authentication should come below it






// GET a sample post route
router.post('/routename', sampleFunc)


module.exports = router