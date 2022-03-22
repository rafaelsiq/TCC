var mongoose = require('mongoose');  
const Sponsors = require('./Classes/Sponsors');

var SponsorsSchema = new mongoose.Schema(Sponsors());

mongoose.model('Sponsors', SponsorsSchema);

module.exports = mongoose.model('Sponsors');

