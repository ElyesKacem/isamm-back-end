const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const personnelSchema = new Schema({
    first_name: {
        type : String,
        required : true
    },
    last_name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    phone_number: {
        type : String,
        required : true
    },
    credentials_id:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('personnel', personnelSchema, 'personnels');