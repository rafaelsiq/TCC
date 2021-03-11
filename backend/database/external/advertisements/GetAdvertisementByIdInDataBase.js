var Advertisements = require('../entity/Advertisements');

module.exports = class GetAdvertisementByNameInDataBase {
  getAdvertisementById(req, res, err) {
    Advertisements.findById(req.params.id, function (err, advertisements) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!advertisements) return res.status(404).send("No user found.");
      res.status(200).send(advertisements);
    });
  }
}