import Advertsement from './advertsement.model';
import HTTPStatus from 'http-status';
import constants from '../../../src/config/constants';

const jwt = require('jsonwebtoken');

export async function updateById(req, res, next) {
    const userId = req.url.toString().split('userId=')[1]
    const user = await Advertsement.findByIdAndUpdate(userId, { ...req.body })
    res.status(HTTPStatus.OK).json(user)
    return next()
}
export async function deleteAd(req, res) {
    try {
        const userId = req.url.toString().split('userId=')[1]
        const Sp = await Advertsement.findById(userId);
        await Sp.remove();
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
export async function createAd(req, res) {
    try {
        const user = await Advertsement.up({...req.body, sponsor:req.body.userId });
        return res.status(HTTPStatus.CREATED).json(user);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}