var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: String,
  cpf : Number,
  cnpj:Number,
  email: String,
  password: String,
  api:String,
  streamer_id:String,
  tempo_total: Number,
  ad_sponsors_id: String,
  ad_type_conteudo: String,
  ad_type_idade: String,
  ad_titulo:String,
  ad_arquivo:String,
  ad_publico:String,
  ad_streamers: Boolean
});

mongoose.model('Streamers', UserSchema);

module.exports = mongoose.model('Streamers');