const Internship = require("../models/stage.js");

exports.insertInternship = async (req, res) => {

    // Create a teacher object
    let internship = new Internship({
        ...req.body
    })

    // Save teacher in the database
    internship.save((err, inserted) => {
        if (err) {
            console.log(err)
        } else {
            console.log(inserted)
            res.json(inserted)
        }
    })
}

exports.updateInternship = async (req, res) => {
    var id = req.params.id
    console.log(id,req.body)
    Stage.findByIdAndUpdate(id,req.body, function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
}

exports.getAllInternships = async (req, res) => {
    var id = req.params.id
    Internship.findOne({ '_id': id }, function (err, result) {
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
      });
}