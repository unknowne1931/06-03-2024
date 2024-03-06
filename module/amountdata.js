const mongoose = require('mongoose');

const AmountfixSchema = new mongoose.Schema({
    Time : String,
    Amount : String,
    email : String
});

module.exports = mongoose.model('Amount-data', AmountfixSchema);