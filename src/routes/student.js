const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const multer = require('multer');
const upload = multer();
const studentController = require('../controllers/student.controller');

//student
router.patch('/', VerifyUserToken, studentController.updateStudent);
router.get('/', VerifyUserToken, studentController.getStudent);


router.post('/login', studentController.login);

//admins
router.post('/', VerifyUserToken, VerifyRole(["administrator"]), studentController.insertStudent);
router.patch('/:id', VerifyUserToken,VerifyRole(["administrator","student"]), studentController.updateStudent);
router.get('/:id', VerifyUserToken,VerifyRole(["administrator","student"]), studentController.getStudent);
router.get('/get/all', VerifyUserToken,VerifyRole(["administrator"]), studentController.getAllStudents);
router.delete('/:id', VerifyUserToken, VerifyRole(["administrator"]), studentController.deleteStudent);
router.post('/excel', VerifyUserToken, VerifyRole(["administrator"]), upload.any(), studentController.insertStudentsExcel);




module.exports = router;