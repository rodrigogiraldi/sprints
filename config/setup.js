const express = require('express');

const sprintTemplateService = require('../services/sprint-template.service');

const router = express.Router();

router.get('/', (req, res, next) => {

    (async function () {
        try {
            const message = await sprintTemplateService.createSprints();

            res.json({
                status: 200,
                message: message
            })
        }
        catch (err) {
            res.json({
                status: 404
            })
            console.log(err);
        }
    }());
});

module.exports = router;