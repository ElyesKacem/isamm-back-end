const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const event = new Schema({
    title: {
        type:String,
        required : true
    },
    description: {
        type:String,
        required : true
    },
    date: {
        type: Date,
        default: new Date()
    },
    createdBy:{type: Schema.Types.ObjectId, ref: 'user'},
});

module.exports = mongoose.model('Event', event, 'Events');
