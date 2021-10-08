const express = require('express')

const router = express.Router();

// Create routes for users
router.get('/', (req, res) => {
    res.send('This is users page')
})

// router.get('/premium', (req, res) => {
//     res.send('These are premium users')
// })

module.exports = router