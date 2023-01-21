const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const createPFeValidator = require('../validators/validator');

// don't forget to import middlewares's functions

const {modelClass} = require('../models/classe.model');
const {modelResume} = require('../models/resume.model');
const {demande} = require('../models/demande.model');
const {event} = require('../models/event.model');
const {internship} = require('../models/internship.model');
const {offer} = require('../models/offer.model');
const {pfa} = require('../models/pfa.model');
const {resume} = require('../models/resume.model');
const {student} = require('../models/student.model');
const {teacher} = require('../models/teacher.model');
const {user} = require('../models/user.model');

// List of models
let simpleModels = ['demande','pfa','resume'];
let models = ['classe','demande','event','internship','offer','pfa','resume','student','teacher'];

const middlewareFunctions = {
    // Internship: [createPFeValidator],

}


// Loop over models and define CRUD routes
models.forEach(modelName => {
/**
 * @swagger
 * /modelName:
 *   get:
 *     description:  "${modelName}"
 *     tags:
 *       - "${modelName}"
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Test routes
 *         schema:
 *           type: string
 */

    // Get the model
    const Model = mongoose.model(modelName);
    const middlewares = middlewareFunctions[modelName] || []
    // Create
    router.post(`/${modelName}`,middlewares,async (req, res) => {
        const newModel = new Model(req.body);
        try {
            await newModel.save();
            res.status(201).send(newModel);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    

    // Read
    router.get(`/${modelName}`, async (req, res) => {

        try {
           if(modelName === "Internship")
           {
                models = await Model.find({}).populate('teacherId').populate('studentsId').exec();
           }else {
                models = await Model.find({});
           }
            res.send(models);
        } catch (error) {
            res.status(500).send(error);
        }
    });


    router.get(`/${modelName}/:id`, async (req, res) => {
        try {
            const model = await Model.findById(req.params.id);
            if (!model) {
                return res.status(404).send();
            }
            res.send(model);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // Update
    router.put(`/${modelName}/:id`, async (req, res) => {
        try {
            const model = await Model.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });
            if (!model) {
                return res.status(404).send();
            }
            res.send(model);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    // Delete
    router.delete(`/${modelName}/:id`, async (req, res) => {
        try {
            const model = await Model.findByIdAndDelete(req.params.id);
            if (!model) {
                return res.status(404).send();
            }
            res.send(model);
        } catch (error) {
            res.status(500).send(error);
        }
    });
});

module.exports = router;