var Streamers = require('../../entity/Streamers');

module.exports = class GetStreamerByNameInDataBase {
  getStreamerById(req, res, err) {
    Streamers.findById(req.params.id, function (err, streamers) {
      if (!streamers) return res.status(404).send("No streamer found.");
      if (err) return res.status(500).send("There was a problem finding the streamer.");
      res.status(200).send(streamers);
    });
  }
}