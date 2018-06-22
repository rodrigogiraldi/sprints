const express = require('express');

const router = express.Router();

const sprintTemplate = require('./api/sprint-template.route');
const pastSprint = require('./api/past-sprint.route');

router.use('/sprintTemplates', sprintTemplate);
router.use('/pastSprints', pastSprint);

module.exports = router;