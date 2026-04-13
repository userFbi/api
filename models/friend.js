const mongoose = require('mongoose')
const friendSchema = new mongoose.Schema({
    name: String,
    surname: String
})

module.exports = mongoose.model('friends', friendSchema)