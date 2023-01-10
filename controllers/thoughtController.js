//Not sure if I need the express in my thought controller.
// const router = require('express').router();
const { Thought, User } = require('../models');

//Need to complete thoughtController to include Creating thought and Deleting thought. 

const thoughtController = {
    createThought(req, res) {
        Thought.create(req.body)
        .then((Thought) => res.json(thought))

    }
} 

module.exports = thoughtController();