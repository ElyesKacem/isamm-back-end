const router = require('express').Router();
const { verifyUserToken, IsAdmin } = require("../middleware/auth");
const pfaController = require('../controllers/pfaController');
// replace isAdmin by isTeacher

router.post('/', verifyUserToken, IsAdmin, pfaController.insertPfa);
router.patch('/:id', verifyUserToken, IsAdmin, pfaController.updatePfa);
router.get('/:id', verifyUserToken, IsAdmin, pfaController.getPfa);
router.delete('/:id', verifyUserToken, IsAdmin, pfaController.deletePfa);

module.exports = router;