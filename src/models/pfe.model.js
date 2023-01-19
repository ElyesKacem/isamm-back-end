const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pfeSchema = new Schema({
    etudiant: {
        type : String,
        required : true
    },
    titre: {
        type : String,
        required : true
    },
    pays: {
        type : String,
        required : true
    },
    societe: {
        type : String,
        required : true
    },
});

module.exports = mongoose.model('pfe', pfeSchema, 'pfes');