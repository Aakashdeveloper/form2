var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var app = express();
var methodOverride = require("method-override")
// all environments
app.set('port', process.env.PORT || 3000);

 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.static(path.join(__dirname, 'public')));
 
mongoose.connect('mongodb://localhost/login');
 var bookRouter = express.Router();
var Schema = new mongoose.Schema({
	_id    : String,
	name: String,
	age   : Number
});
 
var user = mongoose.model('emp', Schema);
 bookRouter.route('/new')
/*post value*/
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

 app.use('/app', bookRouter);
 
 
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
