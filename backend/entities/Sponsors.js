var mongoose = require('mongoose');  
const Sponsors = require('./Classes/Sponsors');

var SponsorsSchema = new mongoose.Schema(Sponsors());

mongoose.model('Sponsors', SponsorsSchema);
mongoose.model('Sponsors').modelName = "Sponsors"
module.exports = mongoose.model('Sponsors');

