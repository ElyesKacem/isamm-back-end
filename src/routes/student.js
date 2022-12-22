const router = require('express').Router();
const { verifyUserToken, IsAdmin } = require("../middleware/auth");
const multer = require('multer');
const upload = multer();
const studentController = require('../controllers/student');

router.post('/', verifyUserToken, IsAdmin, studentController.insertStudent);
router.post('/excel', verifyUserToken, IsAdmin, upload.any(), studentController.insertStudentsExcel);
router.patch('/:id', verifyUserToken, IsAdmin, studentController.updateStudent);
router.get('/:id', verifyUserToken, IsAdmin, studentController.getStudent);
router.delete('/:id', verifyUserToken, IsAdmin, studentController.deleteStudent);

module.exports = router;