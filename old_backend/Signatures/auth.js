const jwt = require('jsonwebtoken')
const login = require('../constants/loginConstants')
const Authorization = require('./authorization');
const Authentication = require('./authentication');
function validateToken(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, login.SECRET, (err, decodded) => {
        if (err) return res.status(401).end();
        decodded = req.userid;
        next();
    })
}

function go() {

}

function validateToken(req, res) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, login.SECRET, (err, decodded) => {
        if (err) return res.status(401).end();
        decodded = req.userid;
    })
}
function validateToken(req, res, next, aq) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, login.SECRET, (err, decodded) => {
        if (err) return res.status(401).end();
        decodded = req.userid;
        next();
    })
}

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
function createToken(req, res) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, login.SECRET, (err, decodded) => {
        if (err) return res.status(401).end();
        decodded = req.userid;
    })
}


module.exports = class Auth {
    constructor() {
    }

    static auth = ({request, profile }) => {
        if (Authentication.isAuthenticated({request, profile })) {
            if (Authorization.isAuthorized({ isAuthenticated: true, request, profile }))
                return true
            return false
        }
        return false
    }
}