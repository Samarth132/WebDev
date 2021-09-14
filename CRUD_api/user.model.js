const mongoose = require('mongoose');

var schema = mongoose.Schema;

var userSchema = new schema({
    name: String,
    email: String,
    skill: String
});

module.exports = mongoose.model('user',userSchema);