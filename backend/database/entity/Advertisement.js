var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  advertisements_id: Number,
  sponsor_id : Number,
  ad_title: String,
  ad_total_time : String,
  ad_content_image : String,
  ad_content_video : String,
  ad_content_gif : String
});

mongoose.model('Advertisements', UserSchema);
module.exports = mongoose.model('Advertisements');

