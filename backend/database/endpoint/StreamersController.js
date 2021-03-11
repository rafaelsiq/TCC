var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const GetAllStreamersInDataBase = require('../external/streamers/GetAllStreamersInDataBase');
const GetStreamerByIdInDataBase = require('../external/streamers/GetStreamerByIdInDataBase');
const DeleteStreamerByIdInDataBase = require('../external/streamers/DeleteStreamerByIdInDataBase');
const UpdateStreamerByIdInDataBase = require('../external/streamers/UpdateStreamerByIdInDataBase');
const InsertStreamerInDataBase = require("../external/streamers/InsertStreamerInDataBase");


router.post('/', function (req, res, err) { new InsertStreamerInDataBase().insertStreamer(req,res,err)});
router.get('/', function(req, res, err) {new GetAllStreamersInDataBase().getAllStreamers(req, res, err)});
router.get('/:id', function(req,res,err) { new GetStreamerByIdInDataBase().getStreamerById(req, res, err)});
router.delete('/:id',function(req,res,err) { new DeleteStreamerByIdInDataBase().deleteStreamerById(req, res, err)});
router.put('/:id',function(req,res,err) { new UpdateStreamerByIdInDataBase().updateStreamerById(req, res, err)});


module.exports = router;