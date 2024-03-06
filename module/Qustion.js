const mongoose = require('mongoose');


const QuestionsSchema = new mongoose.Schema({
    Time : String,
    email : String,
    Qno : String,
    img : String,
    question : String,
    optionA : String,
    optionB : String,
    optionC : String,
    optionD : String,
    Answer : String

});

module.exports = mongoose.model('Questions', QuestionsSchema);