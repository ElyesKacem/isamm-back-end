const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pfa = new Schema({
    title: String,
    description: String,
    date: {
        type: Date,
        default: new Date()
    },
    createdBy:{type: Schema.Types.ObjectId, ref: 'user'},
    // validatedBy:
});

module.exports = mongoose.model('pfa', pfa, 'pfas');