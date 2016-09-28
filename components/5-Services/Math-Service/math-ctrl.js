var app = angular.module('MyApp', []);

app.controller('MathServiceController', function($scope, MathService){

	$scope.squareNumber = function(inputValue){
		$scope.answer = MathService.square(inputValue);
	};

});
