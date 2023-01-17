const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const teacherSchema = new Schema({
    first_name: {
        type : String,
        required : true
    },
    last_name: {
        type : String,
        required : true
    },
    phone_number: {
        type : String,
        required : true
    },
    username: {
        type:String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    role:[
        {
            type : String,
            required : true
        }
    ]
});

module.exports = mongoose.model('Teacher', teacherSchema, 'Teachers');