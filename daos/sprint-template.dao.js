const mongoose = require('mongoose');

const sprintTemplateSchema = mongoose.Schema({
    name: String,
    duration: Number,
    status: String
});

const sprintTemplateDAO = mongoose.model('SprintTemplate', sprintTemplateSchema);

module.exports = sprintTemplateDAO;