const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resume = new Schema({
    student_id:{
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    description:String,
    contact:{
        phone_number:Number,
        e_mail:String,
    },
    academic_background:[
        {
            year:String,
            description:String

        }
    ],
    content:[
        {
            section:[
                {
                    title:String,
                    description:String,
                    date:String,
                    //logo(file)
                }
            ]
        }
    ]
});

module.exports = mongoose.model('resume', resume, 'resumes');