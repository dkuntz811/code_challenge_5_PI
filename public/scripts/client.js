console.log('sourced client.js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/index', {
		templateUrl: '/views/index.html',
		controller: 'addController'
	}).
	when('/view', {
		templateUrl: '/views/partials/view.html',
		controller: 'viewController'
	});

}]);
