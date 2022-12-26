const Teacher = require("../models/teacher.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");




exports.insertTeacher = async (req, res) => {

    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    // Create a teacher object
    let teacher = new Teacher({
        ...req.body
    })

    // Save teacher in the database
    teacher.save((err, inserted) => {
        if (err) {
            console.log(err)
            res.status(400).send(err.message)
        } else {
            res.status(200).send(inserted)
        }
    })
}



exports.updateTeacher = async (req, res) => {
    var id = req.params.id ? req.params.id : req.user.id
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    console.log(id,req.body)
    Teacher.findByIdAndUpdate(id,req.body, function(err, result){
        if(err){
            res.status(400).send(err.message)
        }
        else{
            res.status(200).send(result)
        }
    })
}

exports.deleteTeacher = async (req, res) => {
    var id = req.params.id
    Teacher.findOneAndDelete({ '_id': id }, function(err, result){
        if(err){
            res.status(400).send(err.message)
        }
        else{
            res.status(200).send(result)
        }
    })
}

exports.getTeacher = async (req, res) => {
    var id = req.params.id ? req.params.id : req.user.id
    Teacher.findOne({ '_id': id }, function (err, result) {
        if(err){
            res.status(400).send(err.message)
        }
        else{
            res.status(200).send(result)
        }
      });
}

exports.login = async (req, res) => {

    Teacher.findOne({ email: req.body.email }, async (err, teacher) => {
        if (err) {
            res.status(400).send(err.message)
        } else {
            if (teacher) {
                const validPass = await bcrypt.compare(req.body.password, teacher.password);
                if (!validPass) return res.status(401).send("Email or Password is wrong");

                let payload = { id: teacher._id};
                const token = jwt.sign(payload, config.TOKEN_SECRET);

                res.status(200).header("auth-token", token).send({ "token": token });
            }
            else {
                res.status(401).send('Email is wrong')
            }

        }
    })
}