import Advertsement from './advertsement.model';
import HTTPStatus from 'http-status';

export async function createAds(req, res) {
    try {
        const Ad = await Advertsement.createAds(req.body, req.user._id);
        return res.status(HTTPStatus.CREATED).json(Ad.toAuthJSON());
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

export async function getAdById(req, res) {
    try {
        const Ad = await Advertsement.findById(req.params.id);
        return res.status(HTTPStatus.OK).json(Ad.toAuthJSON());
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function getAdsList(req, res) {
    const limit = parseInt(req.query.limit, 0);
    const skip = parseInt(req.query.skip, 0);
    try {
        const Ads = await Advertsement.list({ limit, skip });
        return res.status(HTTPStatus.OK).json(Ads.toAuthJSON());
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function updateAd(req, res) {
    try {
        const Ad = await Advertsement.findById(req.params.id);
        if (!Ad.user.equals(req.user._id)) {
            return res.sendStatus(HTTPStatus.UNAUTHORIZED);
        }

        Object.keys(req.body).forEach(key => {
            Ad[key] = req.body[key];
        });

        return res.status(HTTPStatus.OK).json(await Ad.save());
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function deleteAd(req, res) {
    try {
        const Ad = await Advertsement.findById(req.params.id);

        if (!Ad.user.equals(req.user._id)) {
            return res.sendStatus(HTTPStatus.UNAUTHORIZED);
        }

        await Ad.remove();
        return res.sendStatus(HTTPStatus.OK);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}