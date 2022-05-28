import HTTPStatus from 'http-status';
import User from './user.model';
import constants from '../../config/constants';
import { hashSync } from 'bcrypt-nodejs';

const jwt = require('jsonwebtoken');


export async function signUp(req, res) {
    try {
        if(!req.body.cnpj)
            req.body = {...req.body, cnpj: req.body.userName}
        const user = await User.create(req.body);
        return res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function login(req, res, next) {
    try{
        res.status(HTTPStatus.OK).json(req.user.toAuthJSON());
    }
    catch (err) {
        res.status(HTTPStatus.BAD_REQUEST).json({message:"Unauthorized"})
    }
    return next()
}
export async function updateById(req, res, next) {
    const userId = req.url.toString().split('userId=')[1]
    if(req.body.password)
        req.body.password = hashSync(req.body.password); //eslint-disable-line no-param-reassign
    const user = await User.findByIdAndUpdate(userId, { ...req.body })
    res.status(HTTPStatus.OK).json(user)
    return next()
}
export async function getUserById(req, res) {
    try {
        const Ad = await User.findById(req.params.id);
        return res.status(HTTPStatus.OK).json(Ad.toAuthJSON());
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function getUsersList(req, res) {
    try {
        const Ads = await User.find({});
        return res.status(HTTPStatus.OK).json(Ads);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function deleteUser(req, res) {
    try {
        const userId = req.url.toString().split('userId=')[1]
        const Ad = await User.findById(userId);
        await Ad.remove();
        return res.sendStatus(HTTPStatus.OK);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function validateUser(req, res, next) {
    jwt.verify(
        req.headers['authorization'],
        constants.JWT_SECRET,
        (err, decoded) => {
            if (err) {
                return res.json({ status: "error", message: err.message, data: null });
            } else {
                req.body.userId = decoded.id;  //eslint-disable-line no-param-reassign
                return next(); 
            }
        })
}