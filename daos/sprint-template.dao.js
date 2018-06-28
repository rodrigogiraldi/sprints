const mongoose = require('mongoose');

/**
 * @swagger
 * definitions:
 *   SprintTemplate:
 *     type: object
 *     required:
 *       - _id
 *       - name
 *       - duration
 *       - status
 *     properties:
 *       _id:
 *         type: string
 *       name:
 *         type: string
 *       duration:
 *         type: number
 *       status:
 *         type: string
 *       __v:
 *         type: number
 */
const sprintTemplateSchema = mongoose.Schema({
    name: String,
    duration: Number,
    status: String
});

const sprintTemplateDAO = mongoose.model('SprintTemplate', sprintTemplateSchema);

module.exports = sprintTemplateDAO;