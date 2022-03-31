const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    tags: [{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model('Link', schema);