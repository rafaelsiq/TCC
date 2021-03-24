var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  sponsor_name: String,
  sponsor_cpf : String,
  sponsor_cnpj: String,
  sponsor_email: String,
  sponsor_password: String,
  ad_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Advertisement' }
});

mongoose.model('Sponsors', UserSchema);

module.exports = mongoose.model('Sponsors');

