const router = require('express').Router();
const { verifyUserToken, IsDirecteurEtudes } = require("../middleware/auth");
const teacherController = require('../controllers/teacher.controller');

//teacher
router.patch('/', verifyUserToken, teacherController.updateTeacher);
router.get('/', verifyUserToken, teacherController.getTeacher);

//admins
router.post('/', verifyUserToken, IsDirecteurEtudes, teacherController.insertTeacher);
router.patch('/:id', verifyUserToken, IsDirecteurEtudes, teacherController.updateTeacher);
router.get('/:id', verifyUserToken, IsDirecteurEtudes, teacherController.getTeacher);
router.delete('/:id', verifyUserToken, IsDirecteurEtudes, teacherController.deleteTeacher);



module.exports = router;