// Using Mongoose to create the user inputs/thoughts/ reactions.
const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId, 
            default: () => {
                new mongoose.Types.ObjectId
            }
        }, 
        reactionBody: {
            type: String,
            required: true,
            min: 1, 
            max: 280
        },
        username: {
            type: String,
            required: true
        }
    },{
        timestamps, id: false, _id: false
    }
)
const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true, 
            min: 1,
            max: 280
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        timestamps,
        id: false
    }
)
const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought;