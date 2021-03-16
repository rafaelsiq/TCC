var Advertisements = require('../../entity/Advertisement');

module.exports = class DeleteAdvertisementByNameInDataBase {
  deleteAdvertisementById(req, res, err) {
    Advertisements.findByIdAndRemove(req.params.id, function (err, advertisements) {
      if(advertisements == null) return res.status(404).send("Ad nao encontrado.")
      if (err) return res.status(500).send("There was a problem deleting the user.");

      res.status(200).send("User: " + advertisements.advertisement_title + " was deleted.");
    });
  }
}