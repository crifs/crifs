// purpose of file: formation of the user auth models with the authentication(login, signup, reset-password)

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    useremail: {
        type: String,
        required: true,
        unique: true
    },
    userpassword: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    userfullname: {
        type: String,
    },
    mobile: {
        type: Number
    },
    gender: {
        type: String
    },
    notifications: {
        type: Array
    },
    feedbacks: {
        type: Array
    },
    logs: {
        type: Array
    },
    logstatus: {
        type: String
    }
}, { timestamps: true })



// static signup method
userSchema.statics.signup = async function(email, password, fullname) {

    // validation
    if(!email || !password || !fullname) {
        throw Error('Please, fill in all fields')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ useremail: email })

    if(exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(13)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ useremail: email, userpassword: hash, userfullname: fullname })

    return user

}

// static login method
userSchema.statics.login = async function(email, password) {

    // validation
    if(!email || !password) {
        throw Error('Please, fill in all fields')
    }

    const user = await this.findOne({ useremail: email })

    if(!user) {
        throw Error('User does not exists')
    }

    const match = await bcrypt.compare(password, user.userpassword)

    if(!match) {
        throw Error('Incorrect password')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)