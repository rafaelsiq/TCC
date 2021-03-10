function deleteStreamerByIdInDataBase (req, res) {
  Streamers.findByIdAndRemove(req.params.id, function (err, streamers) {
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send("User: "+ streamers.name +" was deleted.");
  });
}