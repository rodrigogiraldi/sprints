const sprintTemplateDAO = require('../daos/sprint-template.dao');

exports.getSprints = async function () {

    try {
        const sprintTemplates = await sprintTemplateDAO.find();
        return sprintTemplates;
    }
    catch (err) {
        throw Error('Error getting Sprint Templates');
    }
}

exports.createSprints = async function () {

    try {
        const sprintTemplates = await sprintTemplateDAO.insertMany([
            { name: "Instant",  duration: 5, status: "default"},
            { name: "Very Short",  duration: 300, status: "default"},
            { name: "Short",  duration: 600, status: "default"},
            { name: "Pomodoro",  duration: 1500, status: "default"},
            { name: "Long",  duration: 2700, status: "default"},
            { name: "Very Long",  duration: 3600, status: "default"},
        ])
        return sprintTemplates;
    }
    catch (err) {
        throw Error('Error creating Sprint Templates');
    }
}