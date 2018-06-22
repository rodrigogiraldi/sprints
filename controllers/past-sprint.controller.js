const pastSprintService = require('../services/past-sprint.service');

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
            status: 404
        })
        console.log(err);
    }
}