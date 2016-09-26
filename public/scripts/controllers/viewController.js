myApp.controller('viewController', ['$scope', '$http', function($scope, $http){
	console.log("in viewController");
	$scope.getHeroes = function(){
		$http({
			method: 'GET',
			url: '/heroes'
		}).then(function(response){
			$scope.heroes=response.data;
			console.log('got heroes', response);
		}, function errorCallback(response){
			console.log('error');
		});
	};
}]);
