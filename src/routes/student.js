const router = require('express').Router();
const { verifyUserToken, IsDirecteurEtudes } = require("../middleware/auth");
const multer = require('multer');
const upload = multer();
const studentController = require('../controllers/student');

//student
router.patch('/', verifyUserToken, studentController.updateStudent);
router.get('/', verifyUserToken, studentController.getStudent);


router.post('/login', studentController.login);

//admins
router.post('/', verifyUserToken, IsDirecteurEtudes, studentController.insertStudent);
router.patch('/:id', verifyUserToken,IsDirecteurEtudes, studentController.updateStudent);
router.get('/:id', verifyUserToken,IsDirecteurEtudes, studentController.getStudent);
router.delete('/:id', verifyUserToken, IsDirecteurEtudes, studentController.deleteStudent);
router.post('/excel', verifyUserToken, IsDirecteurEtudes, upload.any(), studentController.insertStudentsExcel);




module.exports = router;