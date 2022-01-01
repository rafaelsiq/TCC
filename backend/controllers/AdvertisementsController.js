var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Advertisements = require('../entities/Advertisements');

const GetAllElementsInDataBase = require('../endpoints/GetAllElementsInDataBase');
const GetElementByIdInDataBase = require('../endpoints/GetElementByIdInDataBase');
const DeleteElementByIdInDataBase = require('../endpoints/DeleteElementByNameInDatabase');
const UpdateElementByIdInDataBase = require('../endpoints/UpdateElementByIdInDataBase');
const InsertElementInDataBase = require("../endpoints/InsertElementInDataBase");


router.post('/', function (req, res, err) { new InsertElementInDataBase().insertAdvertisement(Advertisements,req,res,err)});
router.get('/', function(req, res, err) {new GetAllElementsInDataBase().getAllAdvertisements(Advertisements,req, res, err)});
router.get('/:id', function(req,res,err) { new GetElementByIdInDataBase().getAdvertisementById(Advertisements,req, res, err)});
router.delete('/:id',function(req,res,err) { new DeleteElementByIdInDataBase().deleteAdvertisementById(Advertisements,req, res, err)});
router.put('/:id',function(req,res,err) { new UpdateElementByIdInDataBase().updateAdvertisementById(Advertisements,req, res, err)});

module.exports = router;