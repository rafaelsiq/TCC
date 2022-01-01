var Streamers = require('../../entity/Streamers');

module.exports = class UpdateStreamerByNameInDataBase {
  insertStreamer(req, res, err) {
    Streamers.create({
      streamer_name: req.body.streamer_name,
      streamer_cpf: req.body.streamer_cpf,
      streamer_cnpj: req.body.streamer_cnpj,
      streamer_url: req.body.streamer_url,
      streamer_email: req.body.streamer_email,
      streamer_id: req.body.streamer_id,
      ad_id: req.body.ad_id,
      _id : req.body._id
    },
      function (err, streamers) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(streamers + "\ncreated");
      });
  }
}