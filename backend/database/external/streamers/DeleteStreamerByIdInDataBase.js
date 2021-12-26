var Streamers = require('../../entity/Streamers');

module.exports = class DeleteStreamerByNameInDataBase {
  deleteStreamerById(req, res, err) {
    Streamers.findByIdAndRemove(req.params.id, function (err, streamers) {
      if(streamers == null) return res.status(404).send("streamers not found.")
      if (err) return res.status(500).send("There was a problem deleting the streamer.");
      res.status(200).send("streamer: " + streamers.streamer_name + " was deleted.");
    });
  }
}