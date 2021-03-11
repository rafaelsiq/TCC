var Sponsors = require('../../entity/Sponsors');

module.exports = class GetSponsorByNameInDataBase {
  getSponsorById(req, res, err) {
    Sponsors.findById(req.params.id, function (err, sponsors) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!sponsors) return res.status(404).send("No user found.");
      res.status(200).send(sponsors);
    });
  }
}