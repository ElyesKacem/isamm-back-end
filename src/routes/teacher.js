const router = require('express').Router();
const { verifyUserToken, IsAdmin } = require("../middleware/auth");
const teacherController = require('../controllers/teacher');

router.post('/', verifyUserToken, IsAdmin, teacherController.insertTeacher);
router.patch('/:id', verifyUserToken, IsAdmin, teacherController.updateTeacher);
router.get('/:id', verifyUserToken, IsAdmin, teacherController.getTeacher);
router.delete('/:id', verifyUserToken, IsAdmin, teacherController.deleteTeacher);

module.exports = router;