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
router.post('/', VerifyUserToken, VerifyRole("directeur"), studentController.insertStudent);
router.patch('/:id', VerifyUserToken,VerifyRole("directeur"), studentController.updateStudent);
router.get('/:id', VerifyUserToken,VerifyRole("directeur"), studentController.getStudent);
router.delete('/:id', VerifyUserToken, VerifyRole("directeur"), studentController.deleteStudent);
router.post('/excel', VerifyUserToken, VerifyRole("directeur"), upload.any(), studentController.insertStudentsExcel);




module.exports = router;