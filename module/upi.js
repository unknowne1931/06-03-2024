const mongoose = require('mongoose');

const UPISchema = new mongoose.Schema({
    Time : String,
    username : String,
});

module.exports = mongoose.model('UPI', UPISchema);