var mongoose = require('mongoose');  
const  Lives = require('./Classes/Lives');

var LivesSchema = new mongoose.Schema(Lives());

mongoose.model('Lives', LivesSchema);

module.exports = mongoose.model('Lives');

