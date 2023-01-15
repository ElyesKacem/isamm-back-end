const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const pfeController = require('../controllers/pfe.controller');





router.post('/', VerifyUserToken,VerifyRole("Etudiant"), pfeController.insertPfe);



module.exports = router;