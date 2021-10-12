const mongoose = require('mongoose')

require('dotenv/config')

// Connect to DB

const dbCon = async () => {
    try{
        await mongoose.connect(process.env.DB_CON)
        console.log('Successfully connected to the DB!')
    }catch(err){
        console.log(err.message)
    }
}

dbCon()

// mongoose.connect(process.env.DB_CON).then(() => {
//     console.log('Successfully connected to the DB!')
// }).catch((err) => {
//     console.log(err.message)
// })