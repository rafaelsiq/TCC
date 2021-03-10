function getStreamerByNameInDataBase(req, res) {
  Streamers.findById(req.params.id, function (err, streamers) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!streamers) return res.status(404).send("No user found.");
      res.status(200).send(streamers);
  });
}