const express = require('express')

const router = express.Router();

const User = require('../models/User')

// Create routes for users
router.get('/', (req, res) => {
    res.send('This is users page')
})

// router.get('/premium', (req, res) => {
//     res.send('These are premium users')
// })

router.post('/', (req, res) => {
    // Create new user
    console.log(req.body)
})

module.exports = router