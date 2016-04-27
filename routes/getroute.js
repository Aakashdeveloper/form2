var express = require('express');

var routes = function(){
	var dashRoute = express.Router();
	
	dashRoute.route('/dashboard')
/*post value*/
var user = mongoose.model('doctar', Schema);
    .post(function(req,res){
		
			var users = new user({
		_id    : req.body.email,
		name: req.body.name,
		age   : req.body.age				
	});
	users.save(function(err, doc){
		if(err) res.json(err);
		else    res.send('Successfully inserted!');
	});
	});
	return dashRoute;
};

module.exports = routes;
