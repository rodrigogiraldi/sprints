const mongoose = require('mongoose');

const pastSprintSchema = mongoose.Schema({
    name: String,
    duration: Number,
    status: String,
    progress: Number,
    description: String,
    notify: Boolean,
    user: String,
    createdAt: Date,
    startedAt: Date,
    finishedAt: Date
});

const pastSprintSchemaDAO = mongoose.model('PastSprint', pastSprintSchema);

module.exports = pastSprintSchemaDAO;