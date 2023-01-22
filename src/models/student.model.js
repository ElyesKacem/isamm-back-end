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
    birthday: {
        type : String,
        // required : true
    },
    phone_number: {
        type : String,
        required : true
    },
    first_year:{
        type : Number,
        required : true
    },
    last_year:{
        type : Number,
    },
    class: {
        type : String
    },
    country: {
        type : String
    },
    job_year:{
        type : Number,
    },
    company: {
        type : String
    },
    promotion: {
        type : String
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
            ref: 'internship'
        }
    ],
    credentials_id:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    
});

module.exports = mongoose.model('student', studentSchema, 'students');