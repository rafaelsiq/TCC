var Advertisements = require('../../entity/Advertisement');

module.exports = class DeleteAdvertisementByNameInDataBase {
  deleteAdvertisementById(req, res, err) {
    Advertisements.findByIdAndRemove(req.params.id, function (err, advertisements) {
      if(advertisements == null) return res.status(404).send("Ad not found.")
      if (err) return res.status(500).send("There was a problem deleting the Ad.");

      res.status(200).send("Ad: " + advertisements.advertisement_title + " was deleted.");
    });
  }
}