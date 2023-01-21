const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const userController = require('../controllers/user.controller');


//user
router.post('/login', userController.login);

router.patch('/', VerifyUserToken, userController.updateUser)
router.get('/', VerifyUserToken, userController.getUser)

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
router.patch('/:id', VerifyUserToken, VerifyRole("directeur"),userController.updateUser)
/**
 * @swagger
 * /user/:id:
 *   post:
 *     description:  test endpoint
 *     tags:
 *       - User
 */
router.delete('/:id', VerifyUserToken, VerifyRole("directeur"),userController.deleteUser)
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
router.get('/:id', VerifyUserToken, VerifyRole("directeur") ,userController.getUser)




module.exports = router;