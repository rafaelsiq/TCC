var Contracts = require('../entity/Contracts');

module.exports = class UpdateContractByNameInDataBase {
  updateContractById(req, res, err) {
    Contracts.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, contracts) {
      if (err) return res.status(500).send("There was a problem updating the user.");
      res.status(200).send(contracts);
    });
  }
}