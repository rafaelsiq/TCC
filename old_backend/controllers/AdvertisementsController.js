var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Advertisements = require('../entities/Advertisements');
const DataBase = require('./Controllers');

router.post('/', function (req, res, err) {
  new DataBase.InsertElementInDataBase().insertElements(Advertisements, req, res, err)
});
router.get('/', function (req, res, err) {
  new DataBase.GetAllElementsInDataBase().getAllElements(Advertisements, req, res, err)
});
router.get('/:id', function (req, res, err) {
  new DataBase.GetElementByIdInDataBase().getElementById(Advertisements, req, res, err)
});
router.delete('/:id', function (req, res, err) {
  new DataBase.DeleteElementByIdInDataBase().deleteById(Advertisements, req, res, err)
});
router.put('/:id', function (req, res, err) {
  new DataBase.UpdateElementByIdInDataBase().updateElementById(Advertisements, req, res, err)
});

module.exports = router;