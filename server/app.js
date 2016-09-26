var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var connection = require('../modules/connection');
mongoose.connect(connection);

var index = require('../routers/index');
app.use('/', index);

var heroes = require('../routers/heroes');
app.use('/heroes', heroes);

app.use(express.static('public'));

var portDecision = process.env.PORT || 4040;

var server = app.listen(portDecision, function(){
	var port=server.address().port;
	console.log('Listening on port', port);
});
