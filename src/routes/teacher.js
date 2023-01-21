const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const teacherController = require('../controllers/teacher.controller');

//teacher
router.patch('/', VerifyUserToken, teacherController.updateTeacher);
router.get('/', VerifyUserToken, teacherController.getTeacher);

//admins
router.post('/', VerifyUserToken, VerifyRole(["administrator"]), teacherController.insertTeacher);
router.patch('/:id', VerifyUserToken, VerifyRole(["administrator","teacher"]), teacherController.updateTeacher);
router.get('/:id', VerifyUserToken, VerifyRole(["administrator","teacher"]), teacherController.getTeacher);
router.delete('/:id', VerifyUserToken, VerifyRole(["administrator"]), teacherController.deleteTeacher);



module.exports = router;