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