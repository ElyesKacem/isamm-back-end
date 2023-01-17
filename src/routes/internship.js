const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const internshipController = require('../controllers/internship.controller');
// replace isAdmin by isTeacher

/**
 * @swagger
 * /internship:
 *   post:
 *     description:  internship
 *     tags:
 *       - internship
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Test routes
 *         schema:
 *           type: string
 */

router.post('/', /*VerifyUserToken, VerifyRole("student"),*/ internshipController.insertInternship);
router.patch('/:id', /*VerifyUserToken, VerifyRole("student"),*/ internshipController.updateInternship);
router.get('/:id', /*VerifyUserToken, VerifyRole("student"),*/ internshipController.getInternshipsById);
router.get('/get/all', /*VerifyUserToken, VerifyRole("student"),*/ internshipController.getAllInternships);

module.exports = router;