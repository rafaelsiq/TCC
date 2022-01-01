var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Streamers = require('../entities/Streamers');

const GetAllElementsInDataBase = require('../endpoints/GetAllElementsInDataBase');
const GetElementByIdInDataBase = require('../endpoints/GetElementByIdInDataBase');
const DeleteElementByIdInDataBase = require('../endpoints/DeleteElementByNameInDatabase');
const UpdateElementByIdInDataBase = require('../endpoints/UpdateElementByIdInDataBase');
const InsertElementInDataBase = require("../endpoints/InsertElementInDataBase");


router.post('/', function (req, res, err) { new InsertElementInDataBase().insertElements(Streamers,req,res,err)});
router.get('/', function(req, res, err) {new GetAllElementsInDataBase().getAllElements(Streamers,req, res, err)});
router.get('/:id', function(req,res,err) { new GetElementByIdInDataBase().getElementById(Streamers,req, res, err)});
router.delete('/:id',function(req,res,err) { new DeleteElementByIdInDataBase().deleteById(Streamers,req, res, err)});
router.put('/:id',function(req,res,err) { new UpdateElementByIdInDataBase().updateElementById(Streamers,req, res, err)});

module.exports = router;