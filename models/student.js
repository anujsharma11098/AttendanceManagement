const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    Rollno: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Student', StudentSchema)