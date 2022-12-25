const router = require('express').Router();
const { verifyUserToken, IsDirecteurEtudes } = require("../middleware/auth");
const pfeController = require('../controllers/pfe');




router.post('/', verifyUserToken, pfeController.insertPfe);



module.exports = router;