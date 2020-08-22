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

router.get('/', async (req, res) => {
    let attendance
    attendance = await Attendance.aggregate([

         {
            $sort: {
                createdAt: -1
            }
        }
    ])

    res.json({ status: 200, attendance })
})

router.post('/eachStudent', async (req, res) => {
    

    const particularStudent = await Attendance.find({
        Rollno: req.body.Rollno,
        subject: req.body.subject
    })
    let Present = particularStudent.filter(e => e.status === 1).length
    let Absent = particularStudent.filter(e => e.status === 0).length
    console.log(Present)
    console.log(Absent)

    res.json({ status: 200, Present,Absent })
})




module.exports = router
