const mongoose = require('mongoose');


const VerifySchema = new mongoose.Schema({
    Time : String,
    verify : String,
    username : String

});

module.exports = mongoose.model('Verify', VerifySchema);