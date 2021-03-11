var Sponsors = require('../../entity/Sponsors');

module.exports = class UpdateSponsorByNameInDataBase {
  updateSponsorById(req, res, err) {
    Sponsors.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, sponsors) {
      if (err) return res.status(500).send("There was a problem updating the user.");
      res.status(200).send(sponsors);
    });
  }
}