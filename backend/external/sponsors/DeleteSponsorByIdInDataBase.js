var Sponsors = require('../../entity/Sponsors');

module.exports = class DeleteSponsorByNameInDataBase {
  deleteSponsorById(req, res, err) {
    Sponsors.findByIdAndRemove(req.params.id, function (err, sponsors) {
      if(sponsors == null) return res.status(404).send("sponsors not found.")
      if (err) return res.status(500).send("There was a problem deleting the sponsors.");
      res.status(200).send("Sponsor: " + sponsors.sponsor_name + " was deleted.");
    });
  }
}