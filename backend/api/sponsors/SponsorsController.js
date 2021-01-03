var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Sponsors = require('./Sponsors');

// CREATES A NEW USER
router.post('/', function (req, res) {
    Sponsors.create({
            name: req.body.name,
            cpf : req.body.cpf,
            cnpj: req.body.cnpj,
            email: req.body.email,
            password: req.body.password,
            api:req.body.api,
            ad_titulo:req.body.ad_titulo,
            ad_arquivo:req.body.ad_arquivo,
            ad_publico:req.body.ad_publico,
            sponsors_id: req.body.sponsors_id,
            tempo_maximo: req.body.tempo_maximo,
            tempo_minimo: req.body.tempo_minimo,
            tempo_total: req.body.tempo_total,
            ad_type_conteudo: req.body.ad_type_conteudo,
            ad_type_idade: req.body.ad_type_idade,
            ad_streamers: req.body.ad_streamers,
            ad_streamer_nome: req.body.ad_streamer_nome,
            ad_streamer_id: req.body.ad_streamer_id,
            ad_streamer_tipo: req.body.ad_streamer_tipo
        }, 
        function (err, sponsors) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(sponsors);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    Sponsors.find({ }, function (err, sponsors) {
        if (err) return res.status(500).send("There was a problem finding the sponsors.");
        res.status(200).send(sponsors);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    Sponsors.findById(req.params.id, function (err, sponsors) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!sponsors) return res.status(404).send("No user found.");
        res.status(200).send(sponsors);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Sponsors.findByIdAndRemove(req.params.id, function (err, sponsors) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ sponsors.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    Sponsors.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, sponsors) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(sponsors);
    });
});


module.exports = router;