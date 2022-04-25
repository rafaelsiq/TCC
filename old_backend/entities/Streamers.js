var mongoose = require('mongoose');  
const Streamers = require('./Classes/Streamers');

var StreamerSchema = new mongoose.Schema(Streamers());

mongoose.model('Streamers', StreamerSchema);
mongoose.model('Streamers').modelName = "Streamers"

module.exports = mongoose.model('Streamers');