const notifier = require('node-notifier');

const pastSprintDAO = require('../daos/past-sprint.dao');

exports.createSprint = async function (pastSprint) {

    if (pastSprint.notify) {
        notifier.notify({
            title: 'Sprints App',
            message: 'Sprint completed!'
        });
    }

    try {
        const pastSprintCreated = await pastSprintDAO.create(pastSprint);
        return pastSprintCreated;
    }
    catch (err) {
        throw Error('Error creating Past Sprint');
    }
}

exports.getSprints = async function (userId) {

    try {
        const sprints = await pastSprintDAO.find({ user: userId });
        return sprints;
    }
    catch (err) {
        throw Error('Error getting Past Sprint');
    }
}

exports.deleteSprints = async function (userId) {

    try {
        await pastSprintDAO.deleteMany({ user: userId });
    }
    catch (err) {
        throw Error('Error deleting Past Sprint');
    }
}