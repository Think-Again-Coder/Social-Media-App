//This part brings in Mongoose to connect to my mongoDB account. 
const mongoose = require('mongoose')
mongoose.connect('https://data.mongodb-api.com/app/data-jdblb/endpoint/data/v1', {
    useNewUrlParser: true
})

module.exports = mongoose.connection;
