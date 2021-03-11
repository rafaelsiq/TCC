var Contracts = require('../../entity/Contracts');

module.exports = class GetAllContractsInDataBase {
    getAllContracts(req, res, err)
    {
        Contracts.find({}, function (err, contracts) {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(contracts);
        });
    }
}