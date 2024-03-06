const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    Time : String,
    username : String,
    Qno : String,
    qno1 : String,
    qno2 : String,
    qno3 : String,
    qno4 : String,
    qno5 : String,
});

module.exports = mongoose.model('Users', UsersSchema);