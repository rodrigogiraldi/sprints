const sprintTemplateService = require('../services/sprint-template.service');

/**
   * @swagger
   * /api/sprintTemplates:
   *   get:
   *     tags:
   *      - sprintTemplates
   *     description: Get list of SprintTemplate
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
   *                 $ref: '#/definitions/SprintTemplate'
   *       400:
   *         description: bad request
   *     security:
   *      - api_key: []  
   */
exports.getSprints = async function (req, res, next) {

    console.log("sprintTemplateController.getSprints");

    try {
        const sprintTemplates = await sprintTemplateService.getSprints();

        res.json({
            status: 200,
            data: sprintTemplates
        })
    }
    catch (err) {
        res.json({
            status: 404
        })
        console.log(err);
    }
}