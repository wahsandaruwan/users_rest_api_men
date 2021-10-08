const express = require('express')

const app = express()

require('./helpers/mongodb_init')

// Import routes
const usersRoute = require('./routes/users')

// Middlewares
// Functions that execute during the lifecycle of a request to the Express server. And we can check the user authentication here.
// app.use('/users', () => {
//     console.log("Hello this is users end point!")
// })

// Global middlewares
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/users', usersRoute)



// Basic route
app.get('/', (req, res) => {
    res.send('Hello guys! how are you?')
})

// Start listening to the server'
app.listen(3300)