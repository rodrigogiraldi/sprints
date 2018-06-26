const express = require('express');

const router = express.Router();

const pastSprintController = require('../../controllers/past-sprint.controller');

router.post('/', pastSprintController.createSprint);
router.get('/:userId', pastSprintController.getSprints);

module.exports = router;