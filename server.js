const express = require('express');
const mongoose = require('mongoose');

const api = require('./routes/api.route');

const app = express();

const SERVER = {
    ADDRESS: 'localhost',
    PORT: 3000
};

const DB = {
    ADDRESS: 'localhost',
    PORT: 27017,
    NAME: 'sprints'
}

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${DB.ADDRESS}/${DB.NAME}`)
    .then(() => {
        console.log('Connected to mongodb');
    })
    .catch((err) => {
        console.error(err);
    })

app.use('/api', api);

app.listen(SERVER.PORT, () => {
    console.log(`Running on ${SERVER.PORT}`);
});