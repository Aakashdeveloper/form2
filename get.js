var express = require('express');
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
    
    
var app = express();
    app.set('port', process.env.PORT || 3000);
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(express.static(path.join(__dirname, 'public')));

var db = mongoose.connect('mongodb://localhost/ihealth');

var dashRoute = express.Router();

 

 dashRoute.route('/new')
/*post value*/
    
app.use('/app', dashRoute);
 
 
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
