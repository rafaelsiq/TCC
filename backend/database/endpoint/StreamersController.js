var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Streamers = require('../entity/Streamers');
var GetAllStreamersInDataBase = require('../external/GetAllStreamersInDataBase');

// CREATES A NEW USER
router.post('/', function (req, res) {
    Streamers.create({
        streamer_name: req.body.streamer_name,
        streamer_cpf : req.body.streamer_cpf,
        streamer_cnpj: req.body.streamer_cnpj,
        streamer_url : req.body.streamer_url,
        streamer_email: req.body.streamer_email,
        streamer_id: req.body.streamer_id,
        ad_id : req.body.ad_id,

        }, 
        function (err, streamers) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(streamers);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function(req,res) { GetAllStreamersInDataBase.getAllStreamersInDataBase(req, res)});
router.get('/:id', function(req,res) {GetStreamerByNameInDataBase.getStreamerByNameInDataBase(req, res)});
router.delete('/:id',function(req,res) { DeleteStreamerByIdInDataBase.deleteStreamerByIdInDataBase(req, res)});
router.put('/:id',function(req,res) { UpdateStreamerByIdInDataBase.updateStreamerByIdInDataBase(req, res)});


module.exports = router;