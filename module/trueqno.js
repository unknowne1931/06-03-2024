const mongoose = require('mongoose');

const TruerFalseqnoSchema = new mongoose.Schema({
    Time : String,
    username : String,
    qno1 : String,
    qno2 : String,
    qno3 : String,
    qno4 : String,
    qno5 : String,
    qno6 : String,
    qno7 : String,
    qno8 : String,
    qno9 : String,
    qno10 : String 
});

module.exports = mongoose.model('Qno-true-false', TruerFalseqnoSchema);