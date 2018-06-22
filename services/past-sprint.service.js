const pastSprintDAO = require('../daos/past-sprint.dao');

exports.createSprint = async function (pastSprint) {

    try {
        const pastSprintCreated = await pastSprintDAO.create(pastSprint);
        return pastSprintCreated;
    }
    catch (err) {
        throw Error('Error creating Past Sprint');
    }
}