var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Streamers = require('./Streamers');

// CREATES A NEW USER
router.post('/', function (req, res) {
    Streamers.create({
        name: req.body.name,
        cpf : req.body.cpf,
        cnpj: req.body.cnpj,
        email: req.body.email,
        password: req.body.password,
        api:req.body.api,
        streamer_id: req.body.sponsors_id,
        tempo_total: req.body.tempo_total,
        ad_sponsors_id : req.body.ad_sponsors_id,
        ad_type_conteudo: req.body.ad_type_conteudo,
        ad_type_idade: req.body.ad_type_idade,
        ad_titulo:req.body.ad_titulo,
        ad_arquivo:req.body.ad_arquivo,
        ad_publico:req.body.ad_publico,
        ad_streamer: req.body.ad_streamer
        }, 
        function (err, streamers) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(streamers);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    Streamers.find({}, function (err, streamers) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(streamers);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    Streamers.findById(req.params.id, function (err, streamers) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!streamers) return res.status(404).send("No user found.");
        res.status(200).send(streamers);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Streamers.findByIdAndRemove(req.params.id, function (err, streamers) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ streamers.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    Streamers.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, streamers) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(streamers);
    });
});


module.exports = router;