const mongoose = require('mongoose')

const AttendanceSchema = new mongoose.Schema({
    Rollno: {
        type: String,
        required: true,
        index:true
    },
    subject: {
        type: String,
        required: true,
        index:true

    },
    date: {
        type: String,
        required: true

    },
    status: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Attendance', AttendanceSchema)