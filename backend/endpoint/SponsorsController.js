var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const GetAllSponsorsInDataBase = require('../external/sponsors/GetAllSponsorsInDataBase');
const GetSponsorByIdInDataBase = require('../external/sponsors/GetSponsorByIdInDataBase');
const DeleteSponsorByIdInDataBase = require('../external/sponsors/DeleteSponsorByIdInDataBase');
const UpdateSponsorByIdInDataBase = require('../external/sponsors/UpdateSponsorByIdInDataBase');
const InsertSponsorInDataBase = require("../external/sponsors/InsertSponsorInDataBase");


router.post('/', function (req, res, err) { new InsertSponsorInDataBase().insertSponsor(req,res,err)});
router.get('/', function(req, res, err) {new GetAllSponsorsInDataBase().getAllSponsors(req, res, err)});
router.get('/:id', function(req,res,err) { new GetSponsorByIdInDataBase().getSponsorById(req, res, err)});
router.delete('/:id',function(req,res,err) { new DeleteSponsorByIdInDataBase().deleteSponsorById(req, res, err)});
router.put('/:id',function(req,res,err) { new UpdateSponsorByIdInDataBase().updateSponsorById(req, res, err)});

module.exports = router;