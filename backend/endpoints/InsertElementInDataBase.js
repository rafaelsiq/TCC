
var advertisement = require("../entities/Classes/Advertisements")
var lives = require("../entities/Classes/Lives")
var sponsors = require("../entities/Classes/Sponsors")
var streamers = require("../entities/Classes/Streamers")

module.exports = class UpdateAdvertisementByNameInDataBase {
  insertAdvertisement(element, req, res, err) {
    element.create(insertElement(req,err),
      function (err, element) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(element + "\ncreated");
      });
  }
}
insertElement = (req,err) => {
  switch (req.body.type) {
    case(undefined):
      return err
    case ("advertisement"):
      advertisement.id = req.body.id;
      advertisement.public = req.body.public;
      advertisement.endDate = req.body.endDate;
      advertisement.startDate = req.body.startDate;
      advertisement.file = req.body.file;
      advertisement.startDate = req.body.startDate;
      advertisement.time = req.body.time;
      advertisement.title = req.body.title;
      advertisement.value = req.body.value;
      return advertisement
    case ("lives"):
      lives.date = req.body.date;
      lives.displayedAds = req.body.displayedAds;
      lives.receivedValue = req.body.receivedValue;
      lives.streamer = req.body.streamer;
      lives.total = req.body.total;
      lives.viewersQuant = req.body.viewersQuant;
      return lives;
    case ("sponsors"):
      sponsors.availableAds = req.body.availableAds;
      sponsors.cnpj = req.body.cnpj;
      sponsors.cpf = req.body.cpf;
      sponsors.password = req.body.password;
      sponsors.username = req.body.username;
      sponsors.name = req.body.name;
      return sponsors;
    case ("streamers"):
      streamers.username = req.body.username;
      streamers.cpf = req.body.cpf;
      streamers.linkAd = req.body.linkAd;
      streamers.name = req.body.name;
      streamers.password = req.body.password;
      streamers.paymentType = req.body.paymentType;
      streamers.public = req.body.public;
  }
}