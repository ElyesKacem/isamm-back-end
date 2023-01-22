const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const internshipSchema = new Schema({
    student_id:{
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    internship_theme: String,
    description: String,
    internship_organization:String,
    organization_supervisor:String,
    location: String,
    university_supervisor_id:{
        type: Schema.Types.ObjectId,
        ref: 'personnel'
    },
    type: { 
        type: String,
        enum: ['pfe','initiation','perfect','summer']
    },
    //////////////////////////////////FILE SYSTEM REQUIRED     GRID-FS///////////////////////////////////////////
    //internship_scorecard:file
    //internship_certificate:file           
    //internship_report:file
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    starting_date:{
        type:Date,
        default: new Date()
    },
    ending_date:{
        type:Date,
        default: new Date()
    },
    commentary:String
});

internshipSchema.pre('deleteMany',function (next) {
    const studentId = this.getQuery()["student_id"];
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaashit",studentId);
    mongoose.model('internship').deleteMany(
        {student_id:studentId},function (err, result) {
            if (err) {
                console.log(`[error] ${err}`);
                next(err);
            } else {
                console.log(result);
                next();
            }
        }
    );
    next();
});

module.exports = mongoose.model('internship', internshipSchema, 'internships');