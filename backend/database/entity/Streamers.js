var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  streamer_name : String,
  streamer_url :String,
  streamer_cpf: String,
  streamer_cnpj: String,
  streamer_email :String,
  ad_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Advertisement' }
});

mongoose.model('Streamers', UserSchema);

module.exports = mongoose.model('Streamers');