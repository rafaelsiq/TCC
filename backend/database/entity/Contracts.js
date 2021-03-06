var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  contract_id: Number,
  sponsor_id : Number,
  streamer_id : Number,
  contract_date : Date,
  contract_file : String
});

mongoose.model('Contracts', UserSchema);

module.exports = mongoose.model('Contracts');

