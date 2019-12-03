const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

const app = express();

const apiRouter = require('./routes/api');

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.use('/api',apiRouter);

module.exports = app;