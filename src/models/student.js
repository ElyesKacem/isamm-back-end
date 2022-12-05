const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    email: String,
    name: String,
});

module.exports = mongoose.model('student', studentSchema, 'students');