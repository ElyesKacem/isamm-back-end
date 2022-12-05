const mongoose = require('mongoose');
const Student = require("../models/student.js");
const Excel = require('exceljs');


const multer = require('multer');
const fs = require('fs');



exports.insertStudent = async (req, res) => {

    // Create a student object
    let student = new Student({
        email: req.body.email,
        name: req.body.name,
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
            console.log("+++++")
            worksheet.eachRow(function (row) {
                let student = new Student({
                    email: row.values[1],
                    name: row.values[2],
                });
                students.push(student);
            });
            console.log(students, "+++++")
            res.json(students)
        });



    });



};