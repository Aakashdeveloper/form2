
var mongoose = require('mongoose'),
	schema = mongoose.Schema;
var docterModel = new Schema({
	_id    : String,
	name: String,
	age   : Number
});

module.exports= mongoose.model('Doctar', docterModel);

