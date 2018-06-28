const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');

const router = express.Router();

const options = {
    swaggerDefinition: {
        info: {
            title: 'Sprints Project', // Title (required)
            version: '0.0.1', // Version (required)
        },
    },
    apis: ['./config/*.js', './controllers/*.js', './daos/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

/**
   * @swagger
   * securityDefinitions:
   *   api_key:
   *     type: apiKey
   *     name: Authorization
   *     in: header
*/

module.exports = router;