const Student = require("../models/student.model.js");
const Excel = require('exceljs');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");

const fs = require('fs');



exports.insertStudent = async (req, res) => {

    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    // Create a student object
    let student = new Student({
        ...req.body
    })

    // Save student in the database
    student.save((err, inserted) => {
        if (err) {
            console.log(err)
            res.status(400).send(err.message)
        } else {
            console.log(inserted)
            res.json(inserted)
        }
    })
}


exports.insertStudentsExcel = async (req, res) => {
    //console.log('Files: ', req.files);
    var students = []

    fs.writeFile(req.files[0].originalname, req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            console.log('Uploaded Files: ', req.files);
        }
        let workbook = new Excel.Workbook();
        workbook.xlsx.readFile(req.files[0].originalname).then(function () {
            var worksheet = workbook.getWorksheet(1);
            worksheet.eachRow(function (row,rowNum) {
                if(rowNum !== 1){
                    const salt =  bcrypt.genSaltSync(10);
                    const hashPassword = bcrypt.hashSync(row.values[7], salt);
                    let student = new Student({
                        nom: row.values[1],
                        prenom: row.values[2],
                        niveau: row.values[3],
                        classe: row.values[4],
                        dateNaissance: row.values[5],
                        login: row.values[6],
                        password: hashPassword,
                        alumni: row.values[8]
    
                    });
                    console.log(row.values[1])
                    console.log(student)
                    
                    students.push(student);
                }
                
            });
            console.log(students)
            Student.insertMany(students, function(err, result){
                if (err){
                    console.log(err)
                    res.status(400).send(err.message)
                } 
                else{
                    res.status(200).send( result );
                }
            });
        });
    });
};

exports.updateStudent = async (req, res) => {
    var id = req.params.id ? req.params.id : req.user.id

    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    console.log(id,req.body)
    Student.findByIdAndUpdate(id,req.body, function(err, result){
        if(err){
            res.send(err)
            res.status(400).send(err.message)
        }
        else{
            res.send(result)
        }
    })
}

exports.deleteStudent = async (req, res) => {
    var id = req.user.id
    Student.findOneAndDelete({ '_id': id }, function(err, result){
        if(err){
            res.send(err)
            res.status(400).send(err.message)
        }
        else{
            res.send(result)
        }
    })
}

exports.getStudent = async (req, res) => {
    var id = req.params.id ? req.params.id : req.user.id
    Student.findOne({ '_id': id }, function (err, result) {
        if(err){
            res.send(err)
            res.status(400).send(err.message)
        }
        else{
            res.send(result)
        }
      });
}



exports.login = async (req, res) => {

    Student.findOne({ login: req.body.login }, async (err, user) => {
        console.log(user)
        if (err) {
            console.log(err)
            res.status(400).send(err.message)
        } else {
            if (user) {
                const validPass = await bcrypt.compare(req.body.password, user.password);
                if (!validPass) return res.status(401).send("Login or Password is wrong");

                let payload = { id: user._id, role: user.role, rights:user.rights };
                const token = jwt.sign(payload, config.TOKEN_SECRET);

                res.status(200).header("auth-token", token).send({ "token": token });
            }
            else {
                res.status(401).send('student not found')
            }

        }
    })
}
