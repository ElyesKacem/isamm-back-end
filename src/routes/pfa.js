const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const pfaController = require('../controllers/pfa.controller');
// replace isAdmin by isTeacher

router.post('/', VerifyUserToken, VerifyRole("enseignant"), pfaController.insertPfa);
router.patch('/:id', VerifyUserToken, VerifyRole("enseignant"), pfaController.updatePfa);
router.get('/:id', VerifyUserToken, VerifyRole("enseignant"), pfaController.getPfa);
router.delete('/:id', VerifyUserToken, VerifyRole("enseignant"), pfaController.deletePfa);

module.exports = router;