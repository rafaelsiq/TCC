var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const GetAllContractsInDataBase = require('../external/contracts/GetAllContractsInDataBase');
const GetContractByIdInDataBase = require('../external/contracts/GetContractByIdInDataBase');
const DeleteContractByIdInDataBase = require('../external/contracts/DeleteContractByIdInDataBase');
const UpdateContractByIdInDataBase = require('../external/contracts/UpdateContractByIdInDataBase');
const InsertContractInDataBase = require("../external/contracts/InsertContractInDataBase");


router.post('/', function (req, res, err) { new InsertContractInDataBase().insertContract(req,res,err)});
router.get('/', function(req, res, err) {new GetAllContractsInDataBase().getAllContracts(req, res, err)});
router.get('/:id', function(req,res,err) { new GetContractByIdInDataBase().getContractById(req, res, err)});
router.delete('/:id',function(req,res,err) { new DeleteContractByIdInDataBase().deleteContractById(req, res, err)});
router.put('/:id',function(req,res,err) { new UpdateContractByIdInDataBase().updateContractById(req, res, err)});

module.exports = router;