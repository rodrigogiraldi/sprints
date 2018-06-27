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

exports.getSprints = async function(req, res, next){
    
    console.log("pastSprintController.getSprints");

    let userId = req.params.userId;

    try{
        const sprints = await pastSprintService.getSprints(userId);

        res.json({
            status: 200,
            data: sprints
        })
    }
    catch(err){
        res.json({
            status: 404
        })
        console.log(err);
    }
}

exports.deleteSprints = async function(req, res, next){
    
    console.log("pastSprintController.deleteSprints");

    let userId = req.params.userId;

    try{
        await pastSprintService.deleteSprints(userId);

        res.json({
            status: 204
        })
    }
    catch(err){
        res.json({
            status: 404
        })
        console.log(err);
    }
}