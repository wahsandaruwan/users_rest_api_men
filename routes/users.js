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
    // console.log(req.body)
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
        phone: req.body.phone,
        lastFiveSalaries: req.body.lastFiveSalaries
    })

    user.save().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json({message: err})
    })
})

module.exports = router