const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    NIN:{
        type : Number,
        required : true
    },
    public_profile:{
        type : Boolean,
        default : false
    },
    first_name: {
        type : String,
        required : true
    },
    last_name: {
        type : String,
        required : true
    },
    class: {
        type : String
    },
    birthday: {
        type : String,
        required : true
    },
    alumni:{
        type: Boolean,
        default:false
    },
    resume:{
        type: Schema.Types.ObjectId,
        ref: 'resume'
    },
    internships:[
        { 
            type: Schema.Types.ObjectId,
            ref: 'intership'
        }
    ],
    credentials_id:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('student', studentSchema, 'students');