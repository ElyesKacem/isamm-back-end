const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const userController = require('../controllers/user.controller');


//user
router.post('/login', userController.login);

//super admin (directeur etudes)

/**
 * @swagger
 * /user/:
 *   post:
 *     description:  test endpoint
 *     tags:
 *       - User
 */
router.post('/', /*VerifyUserToken, VerifyRole("directeur"),*/ userController.create);
/**
 * @swagger
 * /user/:id:
 *   post:
 *     description:  test endpoint
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Successfully login
 *         schema:
 *           properties:
 *             status:
 *               type: string
 *             faId:
 *               type: string
 */
router.put('/:id', VerifyUserToken, VerifyRole(["directeur"]),userController.updateUser)
/**
 * @swagger
 * /user/:id:
 *   post:
 *     description:  test endpoint
 *     tags:
 *       - User
 */
router.delete('/:id', VerifyUserToken, VerifyRole(["directeur"]),userController.deleteUser)
/**
 * @swagger
 * /user/:id:
 *   get:
 *     description:  test endpoint
 *     tags:
 *       - User
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully login
 *         schema:
 *           properties:
 *             status:
 *               type: string
 *             faId:
 *               type: string
 */
router.get('/:id', VerifyUserToken, VerifyRole(["directeur"]) ,userController.getUser)

router.put('/auth/forget',userController.forgotPassword)

router.put('/auth/reset',userController.resetPassword)

router.put('/auth/change-password', userController.changePassword);

module.exports = router;