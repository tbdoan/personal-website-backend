const mongoose = require('mongoose');

const now = new Date();

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
        default: now.toLocaleDateString("en-US"),
    }
})

module.exports = mongoose.model('Posts', PostSchema);