var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Streamers = require('../entities/Streamers');
const Auth = require('../Signatures/auth');
const DataBase = require('./Controllers');


router.post('/',  (req, res, err) => { 
    new DataBase.InsertElementInDataBase().insertElements(Streamers, req, res, err) 
});
router.get('/',  (req, res, err) => { 
    new DataBase.GetAllElementsInDataBase().getAllElements(Streamers, req, res, err) 
});
router.get('/:id',  (req, res, err) => {
    new DataBase.GetElementByIdInDataBase().getElementById(Streamers, req, res, err) 
});
router.delete('/:id',  (req, res, err) => { 
    new DataBase.DeleteElementByIdInDataBase().deleteById(Streamers, req, res, err) 
});
router.put('/:id',  (req, res, err) => { 
    new DataBase.UpdateElementByIdInDataBase().updateElementById(Streamers, req, res, err) 
});

module.exports = router;