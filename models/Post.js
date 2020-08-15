const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: 'Anonymous'
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Posts', PostSchema);