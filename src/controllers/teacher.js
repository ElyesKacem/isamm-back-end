const Teacher = require("../models/teacher.js");





exports.insertTeacher = async (req, res) => {

    // Create a teacher object
    let teacher = new Teacher({
        ...req.body
    })

    // Save teacher in the database
    teacher.save((err, inserted) => {
        if (err) {
            console.log(err)
        } else {
            console.log(inserted)
            res.json(inserted)
        }
    })
}



exports.updateTeacher = async (req, res) => {
    var id = req.params.id
    console.log(id,req.body)
    Teacher.findByIdAndUpdate(id,req.body, function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
}

exports.deleteTeacher = async (req, res) => {
    var id = req.params.id
    Teacher.findOneAndDelete({ '_id': id }, function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
}

exports.getTeacher = async (req, res) => {
    var id = req.params.id
    Teacher.findOne({ '_id': id }, function (err, result) {
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
      });
}