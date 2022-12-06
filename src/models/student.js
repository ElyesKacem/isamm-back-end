const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    nom: String,
    prenom: String,
    niveau: String,
    classe: String,
    dateNaissance: String,
    alumni:Boolean,
    login:String,
    mdp:String,
});

module.exports = mongoose.model('student', studentSchema, 'students');