const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    nom: {
        type : String,
        required : true
    },
    prenom: {
        type : String,
        required : true
    },
    classe: {
        type : String,
        required : true
    },
    dateNaissance: {
        type : String,
        required : true
    },
    alumni:{
        type:String,
        default:false
    },
    login:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('student', studentSchema, 'students');