const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pfaSchema = new Schema({
    etudiant: Number,
    titre: String,
    pays: String,
    societe: String,
});

module.exports = mongoose.model('pfa', pfaSchema, 'pfas');