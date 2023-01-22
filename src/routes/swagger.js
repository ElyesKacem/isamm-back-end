/**
 * @swagger
 * /student:
 *   post:
 *     description:  test endpoint
 *     tags:
 *       - student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
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
/**
 * @swagger
 * /student:
 *   put:
 *     description:  test endpoint
 *     tags:
 *       - student
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
/**
 * @swagger
 * /student/:id:
 *   get:
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
 *//**
 * @swagger
 * /student/:id:
 *   delete:
 *     description:  test endpoint
 *     tags:
 *       - student
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