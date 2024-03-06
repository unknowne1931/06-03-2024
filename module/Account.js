const mongoose = require('mongoose');

const Accountdatata01Schema = new mongoose.Schema({
    Time : String,
    upi : String,
    name: String,
    username : String
});

module.exports = mongoose.model('User-Account', Accountdatata01Schema);