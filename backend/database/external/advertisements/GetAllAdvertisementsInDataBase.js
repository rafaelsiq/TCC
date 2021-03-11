var Advertisements = require('../../entity/Advertisements');

module.exports = class GetAllAdvertisementsInDataBase {
    getAllAdvertisements(req, res, err)
    {
        Advertisements.find({}, function (err, advertisements) {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(advertisements);
        });
    }
}