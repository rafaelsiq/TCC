var express = require('express');
var app = express();
var db = require('./db');

var SponsorsController = require('./sponsors/SponsorsController');
var StreamersController = require('./streamers/StreamersController');

app.use('/streamers', StreamersController);
app.use('/sponsors', SponsorsController);

module.exports = app;