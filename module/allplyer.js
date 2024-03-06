const mongoose = require('mongoose');

const AllplaySchema = new mongoose.Schema({
    Time : String,
    username : String,
    Country : String
});

module.exports = mongoose.model('All-players', AllplaySchema);