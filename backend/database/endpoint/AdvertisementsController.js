var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const GetAllAdvertisementsInDataBase = require('../external/advertisements/GetAllAdvertisementsInDataBase');
const GetAdvertisementByIdInDataBase = require('../external/advertisements/GetAdvertisementByIdInDataBase');
const DeleteAdvertisementByIdInDataBase = require('../external/advertisements/DeleteAdvertisementByIdInDataBase');
const UpdateAdvertisementByIdInDataBase = require('../external/advertisements/UpdateAdvertisementByIdInDataBase');
const InsertAdvertisementInDataBase = require("../external/advertisements/InsertAdvertisementInDataBase");


router.post('/', function (req, res, err) { new InsertAdvertisementInDataBase().insertAdvertisement(req,res,err)});
router.get('/', function(req, res, err) {new GetAllAdvertisementsInDataBase().getAllAdvertisements(req, res, err)});
router.get('/:id', function(req,res,err) { new GetAdvertisementByIdInDataBase().getAdvertisementById(req, res, err)});
router.delete('/:id',function(req,res,err) { new DeleteAdvertisementByIdInDataBase().deleteAdvertisementById(req, res, err)});
router.put('/:id',function(req,res,err) { new UpdateAdvertisementByIdInDataBase().updateAdvertisementById(req, res, err)});

module.exports = router;