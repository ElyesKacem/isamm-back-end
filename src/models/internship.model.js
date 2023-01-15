const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const internship = new Schema({
    student_id:{
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    internship_theme: String,
    description: String,
    internship_organization:String,
    organization_supervisor:String,
    university_supervisor_id:{
        type: Schema.Types.ObjectId,
        ref: 'teacher'
    },
    type: { pfe: "projet de fin d'étude", init: 'initiation', perf: 'perfectionnement',summer:'été' },
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

module.exports = mongoose.model('internship', internship, 'internships');