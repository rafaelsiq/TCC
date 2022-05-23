import Live from './live.model';
import HTTPStatus from 'http-status';
import advertsementModel from '../advertsements/advertsement.model';
import User from '../users/user.model';

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
        user = await User.findById(req.params.id);
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
        await Live.create(currentLive)
    }
    catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e.response)
    }

    return res.status(HTTPStatus.OK).json({
        'live': currentLive,
        'ad': adDisplay
    })
}
async function validateDate(startDate, endDate) {
    const date = new Date(Date.now());
    if (new Date(startDate) >= date && new Date(endDate) <= date)
        return true
    return false
}
async function getStreamer(streamerId) {
    const userList = await User.find({})
    userList.forEach(element => {
        if (element.id === streamerId)
            return element
    });
}
async function getSponsor(streamerId) {
    const userList = await User.find({})
    userList.forEach(element => {
        if (element.id === streamerId)
            return element
    });

}
async function getAd(adId) {
    const listAd = await advertsementModel.find({})
    listAd.forEach(element => {
        if (element.id === adId)
            return element
    })
}
async function liveLister(liveList, userId) {
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
export async function getSponsorReport(req, res) {
    const liveList = await Live.find({});
    const userId = req.params.id;

    liveLister(liveList, userId).then((response) => {
        return res.status(HTTPStatus.OK).json(response)
    })

}
export async function getStreamerReport(req, res) {
    const liveList = await Live.find({});
    const userId = req.params.id;
    const livesStreamer = [];
    let sponsor = [];
    let ad = [];
    liveList.forEach(item => {
        if (item.streamerId === userId) {
            getSponsor(item.streamerId).then(response => {
                sponsor = response;
            })
                .then(() => {
                    console.log(item.adId)
                    getAd(item.adId).then(response => {
                        ad = response;
                    }).then(() => {
                        livesStreamer.push({
                            ad,
                            sponsor,
                            live: item,
                        })
                    });
                });

        }
    })
    res.status(HTTPStatus.OK).json(livesStreamer)
}