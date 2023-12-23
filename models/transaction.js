// purpose of file: formation of the transactions models


const mongoose = require('mongoose')
// you can import any other package needed as well



const Schema = mongoose.Schema

const transactionSchema = new Schema({

    sanple: {
        type: String,
    },

    
}, { timestamps: true })



module.exports = mongoose.model('Transaction', transactionSchema)