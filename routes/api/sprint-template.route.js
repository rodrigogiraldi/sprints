const express = require('express');

const router = express.Router();

const sprintTemplateController = require('../../controllers/sprint-template.controller');

router.get('/', sprintTemplateController.getSprints);
router.get('/create', sprintTemplateController.createSprints);

module.exports = router;