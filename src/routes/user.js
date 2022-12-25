const router = require('express').Router();
const { verifyUserToken, IsDirecteurEtudes } = require("../middleware/auth");
const userController = require('../controllers/user.controller');


//user
router.post('/login', userController.login);

router.patch('/', verifyUserToken, userController.updateUser)
router.get('/', verifyUserToken, userController.getUser)

//super admin (directeur etudes)
router.post('/', verifyUserToken, IsDirecteurEtudes, userController.create);
router.patch('/:id', verifyUserToken, IsDirecteurEtudes,userController.updateUser)
router.delete('/:id', verifyUserToken, IsDirecteurEtudes,userController.deleteUser)
router.get('/:id', verifyUserToken, IsDirecteurEtudes ,userController.getUser)




module.exports = router;