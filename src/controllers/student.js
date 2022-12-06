const Student = require("../models/student.js");
const Excel = require('exceljs');


const fs = require('fs');



exports.insertStudent = async (req, res) => {

    // Create a student object
    let student = new Student({
        ...req.body
    })

    // Save student in the database
    student.save((err, inserted) => {
        if (err) {
            console.log(err)
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
                    let student = new Student({
                        nom: row.values[1],
                        prenom: row.values[2],
                        niveau: row.values[3],
                        classe: row.values[4],
                        dateNaissance: row.values[5],
                        login: row.values[6],
                        mdp: row.values[7],
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
                } 
                else{
                    res.status(200).send( result );
                }
            });
        });
    });
};

exports.updateStudent = async (req, res) => {
    var id = req.params.id
    console.log(id,req.body)
    Student.findByIdAndUpdate(id,req.body, function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
}

exports.deleteStudent = async (req, res) => {
    var id = req.params.id
    Student.findOneAndDelete({ '_id': id }, function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
}

exports.getStudent = async (req, res) => {
    var id = req.params.id
    Student.findOne({ '_id': id }, function (err, result) {
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
      });
}