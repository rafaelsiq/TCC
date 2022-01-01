module.exports = class GetElementByNameInDataBase {
  getElementById(element,req, res, err) {
    element.findById(req.params.id, function (err, element) {
      if (!element) return res.status(404).send("Ad not found.");
      if (err) return res.status(500).send("There was a problem to search");
      res.status(200).send(element);
    });
  }
}