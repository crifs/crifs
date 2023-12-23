// purpose of file: all routes for user authentication (login, signup, reset-password)


const express = require('express')
const { 
    loginUser,
    signupUser,
    getUser,
    deleteUser,
    updateUser,
} = require('../controllers/authController')
const requireAuth = require('./../middleware/requireAuth')


const router = express.Router()



// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)



// require auth for all other route
router.use(requireAuth)



// GET user
router.get('/', getUser)

// DELETE a user
// router.delete('/:id', deleteUser)
router.delete('/', deleteUser)

// UPDATE a user
router.patch('/', updateUser)


module.exports = router