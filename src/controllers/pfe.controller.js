const Pfe = require("../models/pfe.model.js");


exports.insertPfe = async (req, res) => {


    // Create a student object
    let pfe = new Pfe({
        ...req.body,etudiant: req.user.id
    })

    // Save student in the database
    pfe.save((err, inserted) => {
        if (err) {
            console.log(err)
            res.status(400).send(err.message)
        } else {
            console.log(inserted)
            res.json(inserted)
        }
    })
}