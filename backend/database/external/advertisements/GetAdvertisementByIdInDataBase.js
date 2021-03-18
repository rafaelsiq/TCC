var Advertisements = require('../../entity/Advertisement');

module.exports = class GetAdvertisementByNameInDataBase {
  getAdvertisementById(req, res, err) {
    Advertisements.findById(req.params.id, function (err, advertisements) {
      if (!advertisements) return res.status(404).send("Ad not found.");
      if (err) return res.status(500).send("There was a problem to search the Ad.");
      res.status(200).send(advertisements);
    });
  }
}