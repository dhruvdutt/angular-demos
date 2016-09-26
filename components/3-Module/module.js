var app = angular.module('MyApp', []);

app.controller('MyAppController', function($scope){

	$scope.name = "Dhruvdutt";

	$scope.books = [
		{
			name: 'Book1',
			author: 'Author1'
		},
		{
			name: 'Book2',
			author: 'Author2'
		}
	];

	$scope.sayHello = function() {
		$scope.greeting = 'Hello ' + $scope.username;
	}

});

app.controller('ChildController', function($scope){

	$scope.name = "Inner Controller";

});
