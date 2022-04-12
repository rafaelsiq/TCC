var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Sponsors = require('../entities/Sponsors');
const DataBase = require('./Controllers');


router.post('/', function (req, res, err) { 
    new DataBase.InsertElementInDataBase().insertElements(Sponsors,req,res,err)
});
router.get('/', function(req, res, err) {
    new DataBase.GetAllElementsInDataBase().getAllElements(Sponsors,req, res, err)
});
router.get('/:id', function(req,res,err) { 
    new DataBase.GetElementByIdInDataBase().getElementById(Sponsors,req, res, err)
});
router.delete('/:id',function(req,res,err) { 
    new DataBase.DeleteElementByIdInDataBase().deleteById(Sponsors,req, res, err)
});
router.put('/:id',function(req,res,err) { 
    new DataBase.UpdateElementByIdInDataBase().updateElementById(Sponsors,req, res, err)
});

module.exports = router;