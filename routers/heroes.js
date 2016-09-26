var express = require('express');
var router = express.Router();

var Hero = require('../models/heroModel');
//create dummy hero for testing
router.get('/test', function(req, res){
	var dummyHero = new Hero({
		alias: "SuperDog",
		first_name: 'Chet',
		last_name: 'Wallace',
		city: 'Denver',
		power_name: 'SuperDog'

	});//end dummy hero
	dummyHero.save(function(err){
		if (err){
		console.log('error occurred', err);
		res.sendStatus(500);
	} else {
		res.sendStatus(201);
	}
});//end dummyHero.save
});//end router.get

//Get all heroes//




module.exports=router;
