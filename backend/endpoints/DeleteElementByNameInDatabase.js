module.exports = class DeleteByNameInDataBase {
  deleteById(element, req, res, err) {
    element.findByIdAndRemove(req.params.id, function (err, element) {
      if(element == null) return res.status(404).send("Not found.")
      if (err) return res.status(500).send("There was a problem deleting.");
      res.status(200).send("Was deleted.");
    });
  }
}