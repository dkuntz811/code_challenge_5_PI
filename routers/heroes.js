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


//post hereos
router.post('/', function(req, res){
	console.log('in heroes post');
	console.log('req.body is', req.body);
	var hero = req.body;
	var newIncomingHero = new Hero({
		alias: hero.name,
		first_name: hero.first_name,
		last_name: hero.last_name,
		city: hero.city,
		power_name: hero.power_name
	});

	newIncomingHero.save(function(err){
		if (err){
			console.log('error occured in save', err);
			res.sendStatus(500);
		}else {
			console.log('hero saved successfully');
			res.sendStatus(201);
		}

	});//end save hero

});//end router.post
//Get all heroes//
router.get('/', function(req, res){
	console.log('in heroes get');
	Hero.find({}, function(err, foundHeroes){
		if(err){
			console.log('error getting heroes', err);
			res.sendStatus(500);
		} else {
			res.send(foundHeroes);
		}
	});//end of find
});//end of get




module.exports=router;
