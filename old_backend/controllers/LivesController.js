var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Lives = require('../entities/Lives');
const DataBase = require('./Controllers');

router.post('/', function (req, res, err) {
  new DataBase.InsertElementInDataBase().insertElements(Lives, req, res, err)
});
router.get('/', function (req, res, err) {
  new DataBase.GetAllElementsInDataBase().getAllElements(Lives, req, res, err)
});
router.get('/:id', function (req, res, err) {
  new DataBase.GetElementByIdInDataBase().getElementById(Lives, req, res, err)
});
router.delete('/:id', function (req, res, err) {
  new DataBase.DeleteElementByIdInDataBase().deleteById(Lives, req, res, err)
});
router.put('/:id', function (req, res, err) {
  new DataBase.UpdateElementByIdInDataBase().updateElementById(Lives, req, res, err)
});

module.exports = router;