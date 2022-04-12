var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Streamers = require('../entities/Streamers');
var Sponsors = require('../entities/Sponsors');
var Administrator = require('../entities/Administrator');

const DataBase = require('./Controllers');
const Auth = require('../Signatures/auth');

router.get('/', function(req, res, err) {
    if(Auth.auth({
        request:req,
        profile:['login','get', 'all']
    }))
    if(req.body.type === 'streamer')
        new DataBase.GetUsernameInDataBase().accessControl(Streamers,req, res, err)    
    else if(req.body.type === 'sponsor')
        new DataBase.GetUsernameInDataBase().accessControl(Sponsors,req, res, err)
    else if(req.body.type === 'administrator')
        new DataBase.GetUsernameInDataBase().accessControl(Administrator,req, res, err)
    else
        return res.status(404).send("select a type");

});

module.exports = router;