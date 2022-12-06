const router = require('express').Router();
const { verifyUserToken, IsAdmin } = require("../middleware/auth");
const multer = require('multer');
const upload = multer();
const studentController = require('../controllers/student');

router.post('/insert', verifyUserToken, IsAdmin, studentController.insertStudent);
router.post('/insertExcel', verifyUserToken, IsAdmin, upload.any(), studentController.insertStudentsExcel);
router.patch('/updateStudent/:id', verifyUserToken, IsAdmin, studentController.updateStudent);
router.get('/getStudent/:id', verifyUserToken, IsAdmin, studentController.getStudent);
router.delete('/deleteStudent/:id', verifyUserToken, IsAdmin, studentController.deleteStudent);

module.exports = router;