var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Streamers = require('../entities/Streamers');
var Sponsors = require('../entities/Sponsors');

const GetUsernameInDataBase = require('../endpoints/GetUsernameInDatabase');

router.get('/streamers', function(req, res, err) {new GetUsernameInDataBase().getUserName(Streamers,req, res, err)});
router.get('/sponsors', function(req, res, err) {new GetUsernameInDataBase().getUserName(Sponsors,req, res, err)});

module.exports = router;