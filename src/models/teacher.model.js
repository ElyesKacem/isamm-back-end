const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const teacherSchema = new Schema({
    nom: String,
    prenom: String,
    tel: String,
    login: {
        type:String,
        unique:true
    },
    password: String,
});

module.exports = mongoose.model('teacher', teacherSchema, 'teachers');