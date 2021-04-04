var Contracts = require('../../entity/Contracts');

module.exports = class GetContractByNameInDataBase {
  getContractById(req, res, err) {
    Contracts.findById(req.params.id, function (err, contracts) {
      if (!contracts) return res.status(404).send("No contract found.");
      if (err) return res.status(500).send("There was a problem finding the contract.");
      res.status(200).send(contracts);
    });
  }
}