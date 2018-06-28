const mongoose = require('mongoose');

/**
 * @swagger
 * definitions:
 *   PastSprint:
 *     type: object
 *     required:
 *       - name
 *       - duration
 *       - status
 *       - progress
 *       - description
 *       - notify
 *       - user
 *       - startedAt
 *       - finishedAt
 *     properties:
 *       _id:
 *         type: string
 *       name:
 *         type: string
 *       duration:
 *         type: number
 *       status:
 *         type: string
 *       progress:
 *         type: number
 *       description:
 *         type: string
 *       notify:
 *         type: boolean
 *       user:
 *         type: string
 *       createdAt:
 *         type: string
 *       startedAt:
 *         type: string
 *       finishedAt:
 *         type: string
 *       __v:
 *         type: number
 */
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