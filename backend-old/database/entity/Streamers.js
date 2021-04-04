var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  streamer_id: Number,
  streamer_name : String,
  streamer_url :String,
  streamer_cpf: String,
  streamer_cnpj: String,
  streamer_email :String,
  ad_id: Number
});

mongoose.model('Streamers', UserSchema);

module.exports = mongoose.model('Streamers');