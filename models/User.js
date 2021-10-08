const mongoose = require('mongoose')

// Define user schema / model (How this user going look)
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: Number,
    dob: {
        type: Date,
        default: new Date(+new Date() - 9735*24*60*60*1000)
    },
    isMarried: {
        type: Boolean,
        default: false
    },
    phone: {
        mobile: {
            type: Number,
            required: true
        },
        home: {
            type: Number,
            required: true
        },
        office: Number
    },
    lastFiveSalaries : [Number]
})

// Export the schema | Collection name would be the plural of this schema name
module.exports = mongoose.model('User', UserSchema)