var Streamers = require('../../entity/Streamers');

module.exports = class GetAllStreamersInDataBase {
    getAllStreamers(req, res, err)
    {
        Streamers.find({}, function (err, streamers) {
            if (err) return res.status(500).send("There was a problem finding the streamer.");
            res.status(200).send(streamers);
        });
    }
}