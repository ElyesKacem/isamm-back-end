const Student = require("../models/student.model");
// const pfe = require("../models/pfe.model");



exports.getStudentAlimniStatistics = async (req, res) => {

    try {
        const data = await Student.aggregate().sortByCount("city");
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
  };
  
  exports.getPfeStatistics = async (req, res) => {
    var id = req.params.id;
    console.log(id, req.body);
    Demande.findByIdAndUpdate(id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  };
  