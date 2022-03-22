var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Streamers = require('../entities/Streamers');

const jwt = require('jsonwebtoken')
const login = require('../constants/loginConstants')

const GetAllElementsInDataBase = require('../endpoints/GetAllElementsInDataBase');
const GetElementByIdInDataBase = require('../endpoints/GetElementByIdInDataBase');
const DeleteElementByIdInDataBase = require('../endpoints/DeleteElementByNameInDatabase');
const UpdateElementByIdInDataBase = require('../endpoints/UpdateElementByIdInDataBase');
const InsertElementInDataBase = require("../endpoints/InsertElementInDataBase");
function validateToken(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, login.SECRET, (err, decodded) => {
        console.log(req.body.userid)

        if (err) return res.status(401).end();
        decodded = req.body.userid
        console.log(decodded)
        next();
    })
}

router.post('/',  (req, res, err) => { new InsertElementInDataBase().insertElements(Streamers, req, res, err) });
router.get('/',  (req, res, err) => { new GetAllElementsInDataBase().getAllElements(Streamers, req, res, err) });
router.get('/:id',  (req, res, err) => { new GetElementByIdInDataBase().getElementById(Streamers, req, res, err) });
router.delete('/:id',  (req, res, err) => { new DeleteElementByIdInDataBase().deleteById(Streamers, req, res, err) });
router.put('/:id',  (req, res, err) => { new UpdateElementByIdInDataBase().updateElementById(Streamers, req, res, err) });

module.exports = router;