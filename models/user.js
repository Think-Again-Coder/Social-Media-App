//This builds the user schema with Mongoose for the username,email, thoughts, and friends.
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,

        },
        email: {
            type: String,
            require: true,
            unique: true
        }, 
        thoughts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought'
            
        }],
        friends: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        timestamps, id: false
    }
)
const User = mongoose.model('User', userSchema)

module.exports = User;