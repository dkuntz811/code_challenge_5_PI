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

	$scope.deleteHero = function(id){
		console.log('delete button clicked', id);
		$http({
			method: 'DELETE',
			url: '/heroes/' + id
		}).then(function successCallback(response){
			console.log('delete response =', response);
		}, function errorCallback(response){
			console.log('error');
		});
	};
}]);
