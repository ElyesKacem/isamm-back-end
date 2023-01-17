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
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    class: {
        type : String,
        required : true
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
    ]
});

module.exports = mongoose.model('Student', studentSchema, 'Students');