const mongoose = require('mongoose');
const config = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");


exports.create = async (req, res) => {

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    let user = new User({
        username: req.body.username,
        password: hashPassword,
        roles: req.body.roles,
        rights:[]
    })

    user.save((err, registeredUser) => {
        if (err) {
            console.log(err)
            res.status(400).send(err.message)
        } else {
            let payload = { id: registeredUser._id, role: "admin", rights : []};
            const token = jwt.sign(payload, config.TOKEN_SECRET);

            res.status(200).send({ token })
        }
    });
    req.body.roles.forEach(role => {
        
    });

}

exports.login = async (req, res) => {

    User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) {
            console.log(err)
            res.status(400).send(err.message)
        } else {
            if (user) {
                const validPass = await bcrypt.compare(req.body.password, user.password);
                if (!validPass) return res.status(401).send("Email or Password is wrong");

                let payload = { id: user._id, role: user.role, rights:user.rights };
                const token = jwt.sign(payload, config.TOKEN_SECRET);

                res.status(200).header("auth-token", token).send({ "token": token });
            }
            else {
                res.status(401).send('Email is wrong')
            }

        }
    })
}





exports.updateUser = async (req, res) => {
    var id = req.params.id ? req.params.id : req.user.id

    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    console.log(id,req.body)
    User.findByIdAndUpdate(id,req.body, function(err, result){
        if(err){
            res.status(400).send(err.message)
        }
        else{
            res.status(200).send(result)
        }
    })
}

exports.deleteUser = async (req, res) => {
    var id = req.params.id
    User.findOneAndDelete({ '_id': id }, function(err, result){
        if(err){
            res.status(400).send(err.message)
        }
        else{
            res.status(200).send(result)
        }
    })
}

exports.getUser = async (req, res) => {
    var id = req.params.id ? req.params.id : req.user.id
    User.findOne({ '_id': id }, function (err, result) {
        if(err){
            res.status(400).send(err.message)
        }
        else{
            res.status(200).send(result)
        }
      });
}