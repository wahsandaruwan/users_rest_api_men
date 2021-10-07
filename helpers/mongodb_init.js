const mongoose = require('mongoose')

// Connect to DB
mongoose.connect('mongodb+srv://admin_user1:KcFZimbSy7r7vw9C@noteapp.ymdkd.mongodb.net/users_rest?retryWrites=true&w=majority').then(() => {
    console.log('Successfully connected to the DB!')
}).catch((err) => {
    console.log(err.message)
})