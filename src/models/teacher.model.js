const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const teacherSchema = new Schema({
    nom: {
        type : String,
        required : true
    },
    prenom: {
        type : String,
        required : true
    },
    tel: {
        type : String,
        required : true
    },
    login: {
        type:String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
});

module.exports = mongoose.model('teacher', teacherSchema, 'teachers');