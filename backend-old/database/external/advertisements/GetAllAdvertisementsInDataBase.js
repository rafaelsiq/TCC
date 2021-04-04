var Advertisements = require('../../entity/Advertisement');

module.exports = class GetAllAdvertisementsInDataBase {
    getAllAdvertisements(req, res, err)
    {
        Advertisements.find({}, function (err, advertisements) {
            if (err) return res.status(500).send("There was a problem finding the Ad.");
            res.status(200).send(advertisements);
        });
    }
}