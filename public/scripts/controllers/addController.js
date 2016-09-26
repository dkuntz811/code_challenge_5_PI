myApp.controller('addController', ['$scope', '$http', function($scope, $http){
	console.log("in addController");
	$scope.addHero = function(){
		var dataToSent = {
			alias: $scope.alias,
			first_name: $scope.first_name,
			last_name: $scope.last_name,
			city: $scope.city,
			power_name: $scope.power_name
		};
		console.log('data to send is', dataToSend)
	}
}]);
