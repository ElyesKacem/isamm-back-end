const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pfeSchema = new Schema({
    etudiant: String,
    titre: String,
    pays: String,
    societe: String,
});

module.exports = mongoose.model('pfe', pfeSchema, 'pfes');