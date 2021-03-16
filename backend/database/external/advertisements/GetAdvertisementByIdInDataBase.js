var Advertisements = require('../../entity/Advertisement');

module.exports = class GetAdvertisementByNameInDataBase {
  getAdvertisementById(req, res, err) {
    Advertisements.findById(req.params.id, function (err, advertisements) {
      if (!advertisements) return res.status(404).send("Ad não encontrado.");
      if (err) return res.status(500).send("Problema ao localizar o Ad.");
      res.status(200).send(advertisements);
    });
  }
}