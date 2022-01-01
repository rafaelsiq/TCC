var mongoose = require('mongoose');  
const { default: Streamers } = require('./Classes/Streamers');

var UserSchema = new mongoose.Schema(Streamers);

mongoose.model('Streamers', UserSchema);

module.exports = mongoose.model('Streamers');