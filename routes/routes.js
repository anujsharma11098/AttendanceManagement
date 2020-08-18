const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ status: 200, message: 'Server Up and Running...' })
})

router.use('/api/student', require('./student'))
router.use('/api/teacher', require('./teacher'))
router.use('/api/admin', require('./admin'))
router.use('/api/attendance', require('./attendance'))



module.exports = router