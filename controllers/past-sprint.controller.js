const pastSprintService = require('../services/past-sprint.service');

/**
   * @swagger
   * /api/pastSprints:
   *   post:
   *     tags:
   *      - pastSprints
   *     parameters:
   *       - name: PastSprint
   *         description: Past Sprint
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/PastSprint'
   *     description: Create a new PastSprint
   *     produces:
   *      - application/json
   *     responses:
   *       201:
   *         description: created
   *         schema:
   *           type: object
   *           properties:
   *             status:
   *               type: number
   *             data:
   *               $ref: '#/definitions/PastSprint'
   *       400:
   *         description: bad request
   *     security:
   *      - api_key: []  
   */
exports.createSprint = async function (req, res, next) {

    console.log("pastSprintController.createSprint");

    let pastSprint = req.body;

    try {
        const pastSprintCreated = await pastSprintService.createSprint(pastSprint);

        res.json({
            status: 201,
            data: pastSprintCreated
        })
    }
    catch (err) {
        res.json({
            status: 400
        })
        console.log(err);
    }
}

/**
   * @swagger
   * /api/pastSprints/{userId}:
   *   get:
   *     tags:
   *      - pastSprints
   *     parameters:
   *       - name: userId
   *         description: User id
   *         in: path
   *         required: true
   *         type: string
   *     description: Get list of PastSprint
   *     produces:
   *      - application/json
   *     responses:
   *       200:
   *         description: ok
   *         schema:
   *           type: object
   *           properties:
   *             status:
   *               type: number
   *             data:
   *               type: array
   *               items:
   *                 $ref: '#/definitions/PastSprint'
   *       400:
   *         description: bad Request
   *     security:
   *      - api_key: []  
   */
exports.getSprints = async function (req, res, next) {

    console.log("pastSprintController.getSprints");

    let userId = req.params.userId;

    try {
        const sprints = await pastSprintService.getSprints(userId);

        res.json({
            status: 200,
            data: sprints
        })
    }
    catch (err) {
        res.json({
            status: 400
        })
        console.log(err);
    }
}

/**
   * @swagger
   * /api/pastSprints/{userId}:
   *   delete:
   *     tags:
   *      - pastSprints
   *     parameters:
   *       - name: userId
   *         description: User id
   *         in: path
   *         required: true
   *         type: string
   *     description: Delete user's PastSprints
   *     produces:
   *      - application/json
   *     responses:
   *       204:
   *         description: no content
   *       400:
   *         description: bad Request
   *     security:
   *      - api_key: []  
   */
exports.deleteSprints = async function (req, res, next) {

    console.log("pastSprintController.deleteSprints");

    let userId = req.params.userId;

    try {
        await pastSprintService.deleteSprints(userId);

        res.json({
            status: 204
        })
    }
    catch (err) {
        res.json({
            status: 400
        })
        console.log(err);
    }
}