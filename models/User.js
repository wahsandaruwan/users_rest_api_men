const mongoose = require('mongoose')

// Define user schema (How this user going look)
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
        required: true,
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

module.exports = mongoose.model('User', UserSchema)