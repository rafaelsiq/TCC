var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  sponsor_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Sponsors' },
  streamer_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Streamers' },
  contract_date : Date,
  contract_file : String
});

mongoose.model('Contracts', UserSchema);

module.exports = mongoose.model('Contracts');

