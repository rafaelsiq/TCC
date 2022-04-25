import Administrator from './administrator.model';
import HTTPStatus from 'http-status';


export async function signUp(req, res) {
    try {
        const user = await Administrator.create(req.body);
        return res.status(HTTPStatus.CREATED).json(user);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export function login(req, res, next) {
    res.status(HTTPStatus.OK).json(req.user);
    return next();
}