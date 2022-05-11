import HTTPStatus from 'http-status';
import Streamer from './streamer.model';

export async function signUp(req, res) {
    try {
        const user = await Streamer.create(req.body);
        return res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

export async function login(req, res, next) {
    res.status(HTTPStatus.OK).json(req.user.toAuthJSON());
    return next()
}