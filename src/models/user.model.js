const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    roles:{
        type : [String],
        enum:["student", "teacher","administrator"]
    },
    rights: {
        type : [String],
        default : []
    }
});

module.exports = mongoose.model('user', userSchema, 'users');