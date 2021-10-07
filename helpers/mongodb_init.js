const mongoose = require('mongoose')

require('dotenv/config')

// Connect to DB
mongoose.connect(process.env.DB_CON).then(() => {
    console.log('Successfully connected to the DB!')
}).catch((err) => {
    console.log(err.message)
})