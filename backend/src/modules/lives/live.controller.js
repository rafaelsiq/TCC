import LiveModel from './live.model';
import HTTPStatus from 'http-status';
import advertsementModel from '../advertsements/advertsement.model';
import UserModel from '../users/user.model';

export async function getAdToUserDisplay(req, res) {
    let adList;
    let min;
    let max;
    let aux;
    let adDisplay;
    let user;
    let currentLive;
    let status = 'Parado';
    try {
        user = await UserModel.findById(req.params.id);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json({ 'message': 'user invalid' })
    }
    try {
        adList = await advertsementModel.find({})
        while (status === 'Parado') {

            min = Math.ceil(0);
            max = Math.floor(adList.length);
            aux = Math.floor(Math.random() * (max - min)) + min;
            adDisplay = await adList[aux]
            if (adDisplay.status !== 'Parado') {
                if (validateDate(adDisplay.startDate, adDisplay.endDate))
                    status = 'Online'
            }
        }

        currentLive = {
            sponsorId: adDisplay.sponsor,
            adName: adDisplay.title,
            streamerId: user._id,
            adId: adDisplay.id
        }
        await LiveModel.create(currentLive)

        return res.status(HTTPStatus.OK).json({
            'live': currentLive,
            'ad': adDisplay
        })
    }
    catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e.response)
    }
}
async function validateDate(startDate, endDate) {
    const date = new Date(Date.now());
    if (new Date(startDate) >= date && new Date(endDate) <= date)
        return true
    return false
}
async function liveListerSponsor(liveList, userId) {
    const livesSponsor = [];

    liveList.forEach((item) => {
        if (item.sponsorId === userId) {
            livesSponsor.push({
                live: item,
            })
        }
    })
    return livesSponsor;
}
async function liveListerStreamer(liveList, userId) {
    const livesSponsor = [];

    liveList.forEach((item) => {
        if (item.streamerId === userId) {
            livesSponsor.push({
                live: item,
            })
        }
    })
    return livesSponsor;
}
export async function getSponsorReport(req, res) {
    const liveList = await LiveModel.find({});
    const userId = req.params.id;

    liveListerSponsor(liveList, userId).then((response) => {
        return res.status(HTTPStatus.OK).json(response)
    })

}
export async function getStreamerReport(req, res) {
    const liveList = await LiveModel.find({});
    const userId = req.params.id;

    liveListerStreamer(liveList, userId).then((response) => {
        return res.status(HTTPStatus.OK).json(response)
    })
}