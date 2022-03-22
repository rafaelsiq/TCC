module.exports = class UpdateElementByNameInDataBase {
  updateElementById(req, res, err) {
      element.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, element) {
        if(element == null) return res.status(404).send("not found.")
        if (err) return res.status(500).send("There was a problem updating.");
          res.status(200).send(element);
      });
  }
}