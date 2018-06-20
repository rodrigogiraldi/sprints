const sprintTemplateService = require('../services/sprint-template.service');

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