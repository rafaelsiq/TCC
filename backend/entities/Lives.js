var mongoose = require('mongoose');  
const { default: Lives } = require('./Classes/Lives');

var UserSchema = new mongoose.Schema(Lives);

mongoose.model('Lives', UserSchema);

module.exports = mongoose.model('Lives');

