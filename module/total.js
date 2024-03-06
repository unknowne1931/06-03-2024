const mongoose = require('mongoose');

const PaidlstSchema = new mongoose.Schema({
    Time : String,
    username : String,
    upi : String,
    name: String,
});

module.exports = mongoose.model('Paidlist', PaidlstSchema);