const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type:String,
    },
    password: {
        type : String,
        required : true
    },
    name:{
        type:String,
        required:true
    },
    role:{
        type : String,
        default : "admin"
    },
    rights: {
        type : [String],
        default : []
    }
});

module.exports = mongoose.model('user', userSchema, 'users');