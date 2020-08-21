const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

const Attendance = require('../models/attendance')


router.post('/', async (req, res) => {
    const { Rollno, subject, date, status } = req.body
    
    console.log(req.body)
    try {
        await Attendance.create({
            Rollno, subject, date, status
        })
        res.status(201).json({ status: 201, message: 'Attendance Registered Successfully!' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: 500, error: err })
    }
})



module.exports = router
