const mongoose = require('mongoose');

const UsersLoginSchema = new mongoose.Schema({
    Time : String,
    username : String
});

module.exports = mongoose.model('Users-Login', UsersLoginSchema);