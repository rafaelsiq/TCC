var Advertisements = require('../../entity/Advertisement');

module.exports = class UpdateAdvertisementByNameInDataBase {
  insertAdvertisement(req, res, err) {
    Advertisements.create({
      advertisements_id: req.body.advertisements_id,
      sponsor_id : req.body.sponsor_id,
      ad_title: req.body.ad_title,
      ad_total_time : req.body.ad_total_time,
      ad_content_image : req.body.ad_content_image,
      ad_content_video : req.body.ad_content_video,
      ad_content_gif : req.body.ad_content_gif
    },
      function (err, advertisements) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(advertisements + "\ncreated");
      });
  }
}