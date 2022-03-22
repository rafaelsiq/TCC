var express = require('express');
var app = express();
var db = require('./db');

var SponsorsController = require('./controllers/SponsorsController');
var LivesController = require('./controllers/LivesController');
var AdvertisementsController = require('./controllers/AdvertisementsController');
var StreamersController = require('./controllers/StreamersController');
var LoginController = require('./controllers/LoginController');

app.use('/streamers',  StreamersController);
app.use('/sponsors', SponsorsController);
app.use('/ads', AdvertisementsController);
app.use('/lives', LivesController);
app.use('/login', LoginController)

module.exports = app;