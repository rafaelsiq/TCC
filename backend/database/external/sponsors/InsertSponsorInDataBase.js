var Sponsors = require('../../entity/Sponsors');

module.exports = class UpdateSponsorByNameInDataBase {
  insertSponsor(req, res, err) {
    Sponsors.create({
      sponsors_id: req.body.sponsors_id,
      sponsor_name: req.body.sponsor_name,
      sponsor_cpf : req.body.sponsor_cpf,
      sponsor_cnpj: req.body.sponsor_cnpj,
      sponsor_email: req.body.sponsor_email,
      sponsor_password: req.body.sponsor_password,
      ad_id : req.body.ad_id
    },
      function (err, sponsors) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(sponsors + "\ncreated");
      });
  }
}