const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const eventController = require('../controllers/event.controller');
// replace isAdmin by isTeacher

router.post('/', VerifyUserToken, VerifyRole("enseignant"), eventController.insertEvent);
router.patch('/:id', VerifyUserToken, VerifyRole("enseignant"), eventController.updateEvent);
router.get('/:id', VerifyUserToken, VerifyRole("enseignant"), eventController.getevent);
router.delete('/:id', VerifyUserToken, VerifyRole("enseignant"), eventController.deleteEvent);

module.exports = router;