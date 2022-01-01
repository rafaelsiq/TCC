var mongoose = require('mongoose');  
const Advertisements = require('./Classes/Advertisements');

var AdvertisementsSchema = new mongoose.Schema(Advertisements());

mongoose.model('Advertisements', AdvertisementsSchema);
module.exports = mongoose.model('Advertisements');

