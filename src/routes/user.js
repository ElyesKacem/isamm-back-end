const router = require('express').Router();
const { verifyUserToken, IsAdmin, IsUser } = require("../middleware/auth");
const userController = require('../controllers/user');


// Register
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

// Auth user only
router.get('/user', verifyUserToken, IsUser, userController.userEvent);

// Auth Admin only
router.get('/admin', verifyUserToken, IsAdmin, userController.adminEvent);

module.exports = router;