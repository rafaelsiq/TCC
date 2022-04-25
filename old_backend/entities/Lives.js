var mongoose = require('mongoose');  
const  Lives = require('./Classes/Lives');

var LivesSchema = new mongoose.Schema(Lives());

mongoose.model('Lives', LivesSchema);
mongoose.model('Lives').modelName = "Lives"

module.exports = mongoose.model('Lives');

