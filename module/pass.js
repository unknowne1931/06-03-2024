const mongoose = require('mongoose');

const PassSchema = new mongoose.Schema({
    Time : String,
    ip : String,
    email : String,
    pass : String
});

module.exports = mongoose.model('Login', PassSchema);