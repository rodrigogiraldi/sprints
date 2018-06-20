const express = require('express');

const router = express.Router();

const sprintTemplate = require('./api/sprint-template.route');

router.use('/sprintTemplates', sprintTemplate);

module.exports = router;