var express = require('express');
var app = express();
var db = require('./db');

var SponsorsController = require('../database/endpoint/SponsorsController');
var ContractsController = require('../database/endpoint/ContractsController');
var AdvertisementsController = require('../database/endpoint/AdvertisementsController');
var StreamersController = require('../database/endpoint/StreamersController');

app.use('/streamer', StreamersController);
app.use('/sponsors', SponsorsController);
app.use('/ad', AdvertisementsController);
app.use('/contract', ContractsController);

module.exports = app;