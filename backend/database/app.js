var express = require('express');
var app = express();
var db = require('./db');

var SponsorsController = require('../database/endpoint/SponsorsController');
var StreamersController = require('../database/endpoint/StreamersController');

app.use('/streamer', StreamersController);
app.use('/sponsors', SponsorsController);

module.exports = app;