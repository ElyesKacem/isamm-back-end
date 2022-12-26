const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const userController = require('../controllers/user.controller');


//user
router.post('/login', userController.login);

router.patch('/', VerifyUserToken, userController.updateUser)
router.get('/', VerifyUserToken, userController.getUser)

//super admin (directeur etudes)
router.post('/', VerifyUserToken, VerifyRole("directeur"), userController.create);
router.patch('/:id', VerifyUserToken, VerifyRole("directeur"),userController.updateUser)
router.delete('/:id', VerifyUserToken, VerifyRole("directeur"),userController.deleteUser)
router.get('/:id', VerifyUserToken, VerifyRole("directeur") ,userController.getUser)




module.exports = router;