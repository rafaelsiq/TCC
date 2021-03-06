var Advertisements = require('../../entity/Advertisement');

module.exports = class UpdateAdvertisementByNameInDataBase {
  updateAdvertisementById(req, res, err) {
    Advertisements.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, advertisements) {
      if (err) return res.status(500).send("There was a problem updating the user.");
      res.status(200).send(advertisements);
    });
  }
}