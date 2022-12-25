const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classeSchema = new Schema({
    classe: String,
    lmd_type: String
});

module.exports = mongoose.model('classe', classeSchema, 'classes');