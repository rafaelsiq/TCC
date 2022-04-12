var mongoose = require('mongoose');  
const Users = require('./Classes/Users');

var User = new mongoose.Schema(Users());

mongoose.model('Administrator', User);
module.exports = mongoose.model('Administrator');

