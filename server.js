const express = require('express');
const mongoose = require('mongoose');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

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

app.use('/assets', express.static('src/assets'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: "https://sprints.auth0.com/.well-known/jwks.json"
      }),
      // This is the identifier we set when we created the API
      audience: 'https://sprints.auth0.com/api/v2/',
      issuer: "https://sprints.auth0.com/", // e.g., you.auth0.com
      algorithms: ['RS256']
  });

mongoose.connect(`mongodb://${DB.ADDRESS}/${DB.NAME}`)
    .then(() => {
        console.log('Connected to mongodb');
    })
    .catch((err) => {
        console.error(err);
    })

app.use('/api', authCheck, api);

app.listen(SERVER.PORT, () => {
    console.log(`Running on ${SERVER.PORT}`);
});