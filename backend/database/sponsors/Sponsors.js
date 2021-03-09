var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: String,
  cpf : Number,
  cnpj:Number,
  email: String,
  password: String,
  api:String,
  sponsors_id:String,
  tempo_maximo: Number,
  tempo_minimo: Number,
  tempo_total: Number,
  ad_streamer_nome:String,
  ad_streamer_id: String,
  ad_streamer_tipo: String,
  ad_type_conteudo: String,
  ad_type_idade: String,
  ad_titulo:String,
  ad_arquivo:String,
  ad_publico:String,
  ad_streamers: Boolean
});

mongoose.model('Sponsors', UserSchema);

module.exports = mongoose.model('Sponsors');

