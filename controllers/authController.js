// purpose of file: all functions that controls user authentication should be written here

const User = require('../models/auth')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

// create token
const createToken = (_id) => {
    return jwt.sign({_id: _id}, process.env.JWT_SECRET, { expiresIn: '2d', })
}


// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

// signup user
const signupUser = async (req, res) => {
    const { email, password, fullname } = req.body

    try {
        const user = await User.signup(email, password, fullname)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}




// GET a single users
const getUser = async (req, res) => {
    const user_id = req.user._id

    const users = await User.findOne({ _id: user_id }, { userpassword: 0 })

    res.status(200).json(users)
}


// delete a user
const deleteUser = async (req, res) => {
    // const {id} = req.params
    const user_id = req.user._id

    // if(!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({ error: 'no such user' })
    // }

    const user = await User.findOneAndDelete({ _id: user_id })

    if(!user) {
        return res.status(404).json({ error: 'no such user' })
    }

    res.status(200).json({ accurate: 'successfully deleted' })
}


// update a user
const updateUser = async (req, res) => {
    const user_id = req.user._id
    
    const user = await User.findOneAndUpdate({ _id: user_id }, {
        ...req.body
    })

    if(!user) {
        return res.status(404).json({ error: 'no such user' })
    }

    res.status(200).json({ accurate: 'successfully updated' })
}

module.exports = {
    loginUser,
    signupUser,
    getUser,
    deleteUser,
    updateUser,
}