var Streamers = require('../../entity/Streamers');

module.exports = class DeleteStreamerByNameInDataBase {
  deleteStreamerById(req, res, err) {
    Streamers.findByIdAndRemove(req.params.id, function (err, streamers) {
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send("User: " + streamers.streamer_name + " was deleted.");
    });
  }
}