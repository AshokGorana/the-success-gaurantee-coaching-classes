const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/gameDB");

const userSchema = mongoose.Schema({
    todo: String
});

module.exports = mongoose.model('user', userSchema);