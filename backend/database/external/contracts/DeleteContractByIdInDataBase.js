var Contracts = require('../../entity/Contracts');

module.exports = class DeleteContractByNameInDataBase {
  deleteContractById(req, res, err) {
    Contracts.findByIdAndRemove(req.params.id, function (err, contracts) {
      if(contracts == null) return res.status(404).send("contracts nao encontrado.")
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send("User: " + contracts.contract_id + " was deleted.");
    });
  }
}