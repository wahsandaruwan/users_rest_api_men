const express = require('express')

const router = express.Router();

const User = require('../models/User')

// Get all users route
router.get('/', async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.json({message: err})
    }
})

// router.get('/premium', (req, res) => {
//     res.send('These are premium users')
// })

// Insert user route
router.post('/', async (req, res) => {
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

    // user.save().then((data) => {
    //     res.json(data)
    // }).catch((err) => {
    //     res.json({message: err})
    // })

    try{
        const insertUser = await user.save()
        res.json(insertUser)
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router