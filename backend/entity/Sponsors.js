var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  sponsors_id: Number,
  sponsor_name: String,
  sponsor_cpf : String,
  sponsor_cnpj: String,
  sponsor_email: String,
  sponsor_password: String,
  ad_id : Number
});

mongoose.model('Sponsors', UserSchema);

module.exports = mongoose.model('Sponsors');

