import HTTPStatus from 'http-status';
import Advertsement from './advertsement.model';
import constants from '../../../src/config/constants';

const jwt = require('jsonwebtoken');

export async function updateById(req, res, next) {
    const userId = req.params.id;
    console.log(userId,"<==userID")
    const user = await Advertsement.findByIdAndUpdate(userId, { ...req.body })
    console.log(user)
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
        const status = req.body.status ? req.body.status : 'Parado';
        const ad = {
            ...req.body,
            sponsor: req.body.adUserId,
            startDate: new Date(req.body.startDate),
            endDate: new Date(req.body.endDate),
            status
        }
        const user = await Advertsement.create(ad);
        return res.status(HTTPStatus.CREATED).json(user);
         
    } catch (e) {
         return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function getAdById(req, res) {
    try {
        const Ad = await Advertsement.findOne({_id:req.params.id});
        return res.status(HTTPStatus.OK).json(Ad);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function getAdsList(req, res) {
    try {
        const Ads = await Advertsement.find({sponsor:req.params.id});
        return res.status(HTTPStatus.OK).json(Ads);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}