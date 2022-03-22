var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const jwt = require('jsonwebtoken')
const login = require('../constants/loginConstants')

var Streamers = require('../entities/Streamers');
var Sponsors = require('../entities/Sponsors');
function validateToken(req, res,next){
    const token = req.headers['x-access-token'];
    jwt.verify(token, login.SECRET, (err, decodded) =>{
      if(err)  return res.status(401).end();
      decodded = req.userid;
      next();
    })
  }
const GetUsernameInDataBase = require('../endpoints/GetUsernameInDatabase');

router.get('/streamers', function(req, res, err) {new GetUsernameInDataBase().getUserName(Streamers,req, res, err)});
router.get('/sponsors', function(req, res, err) {new GetUsernameInDataBase().getUserName(Sponsors,req, res, err)});

module.exports = router;