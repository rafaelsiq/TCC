function updateStreamerByIdInDataBase(req, res) {
  Streamers.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, streamers) {
      if (err) return res.status(500).send("There was a problem updating the user.");
      res.status(200).send(streamers);
  });
}