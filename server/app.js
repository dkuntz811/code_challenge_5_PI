var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var connection = require('../modules/connection');
mongoose.connect(connection);

var portDecision = process.env.PORT || 4000;

var server = app.listen(portDecision, function(){
	var port=server.address().port;
	console.log('Listening on port', port);
});
