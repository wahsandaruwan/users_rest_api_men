const express = require('express')

const app = express()

require('./helpers/mongodb_init')

// Middlewares
// Functions that execute during the lifecycle of a request to the Express server. And we can check the user authentication here.
// app.use('/users', () => {
//     console.log("Hello this is users end point!")
// })

// Routes
app.get('/', (req, res) => {
    res.send('Hello guys! how are you?')
})

app.get('/users', (req, res) => {
    res.send('This is users page!')
})

// Start listening to the server'
app.listen(3300)