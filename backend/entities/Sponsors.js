var mongoose = require('mongoose');  
const { default: Sponsors } = require('./Classes/Sponsors');

var UserSchema = new mongoose.Schema(Sponsors);

mongoose.model('Sponsors', UserSchema);

module.exports = mongoose.model('Sponsors');

