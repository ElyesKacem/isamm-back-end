const router = require('express').Router();
const { verifyUserToken, IsAdmin } = require("../middleware/auth");
const multer = require('multer');
const upload = multer();
const studentController = require('../controllers/student');

router.post('/insert', verifyUserToken, IsAdmin, studentController.insertStudent);
router.post('/insertExcel',upload.any(), studentController.insertStudentsExcel);

module.exports = router;