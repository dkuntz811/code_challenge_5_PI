myApp.controller('addController', ['$scope', '$http', function($scope, $http){
	console.log("in addController");
	$scope.addHero = function(){
		var dataToSend = {
			alias: $scope.alias,
			first_name: $scope.first_name,
			last_name: $scope.last_name,
			city: $scope.city,
			power_name: $scope.power_name
		};
		console.log('data to send is', dataToSend)
		//ajax call
		$http({
			method: 'POST',
			url: '/heroes',
			data: dataToSend
		}).then(function (response){
			console.log('post resp =', response);
		}, function errorCallback(response){
			console.log('err')
		});
	};
}]);
