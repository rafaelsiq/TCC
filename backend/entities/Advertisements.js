var mongoose = require('mongoose');  
const { default: Advertisements } = require('./Classes/Advertisements');

var UserSchema = new mongoose.Schema(Advertisements);

mongoose.model('Advertisements', UserSchema);
module.exports = mongoose.model('Advertisements');

