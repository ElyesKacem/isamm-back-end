const Teacher = require("../models/teacher.model");
const Excel = require('exceljs');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");

const fs = require('fs');



exports.insertTeacher = async (req, res) => {
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
            console.log(inserted)
            res.json(inserted)
        }
    })
}

exports.updateTeacher = async (req, res) => {
    var id = req.params.id ? req.params.id : req.user.id
    console.log(id, req.body)
    Teacher.findByIdAndUpdate(id, req.body, function (err, result) {
        if (err) {
            res.send(err)
            res.status(400).send(err.message)
        }
        else {
            res.send(result)
        }
    })
}

exports.deleteTeacher = async (req, res) => {
    var id = req.user.id
    Teacher.findOneAndDelete({ '_id': id }, function (err, result) {
        if (err) {
            res.send(err)
            res.status(400).send(err.message)
        }
        else {
            res.send(result)
        }
    })
}

exports.getTeacher = async (req, res) => {
    var id = req.params.id ? req.params.id : req.user.id
    Teacher.findOne({ '_id': id }, function (err, result) {
        if (err) {
            res.send(err)
            res.status(400).send(err.message)
        }
        else {
            res.send(result)
        }
    });
}

exports.getAllTeachers = async (req, res) => {
    Teacher.find(function (err, result) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
    });
}