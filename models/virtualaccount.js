// purpose of file: formation of the virtual account models


const mongoose = require('mongoose')
// you can import any other package needed as well



const Schema = mongoose.Schema

const virtualaccountSchema = new Schema({

    sanple: {
        type: String,
    },

    
}, { timestamps: true })



module.exports = mongoose.model('VirtualAccount', virtualaccountSchema)

