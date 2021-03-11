var Sponsors = require('../entity/Sponsors');

module.exports = class GetAllSponsorsInDataBase {
    getAllSponsors(req, res, err)
    {
        Sponsors.find({}, function (err, sponsors) {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(sponsors);
        });
    }
}