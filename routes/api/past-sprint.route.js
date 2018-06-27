const express = require('express');

const router = express.Router();

const pastSprintController = require('../../controllers/past-sprint.controller');

router.post('/', pastSprintController.createSprint);
router.get('/:userId', pastSprintController.getSprints);
router.delete('/:userId', pastSprintController.deleteSprints);

module.exports = router;