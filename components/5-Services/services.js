var app = angular.module('MyApp', []);

app.controller('MyServiceController', function($scope){

	$scope.name = "root";

	$scope.price = "50";

	$scope.names = [
		{
			name: 'Ash',
			city: 'Pallet Town'
		},
		{
			name: 'Emma',
			city: 'Paris'
		},
		{
			name: 'John',
			city: 'Abu Dhabi'
		},
		{
			name: 'Emelia',
			city: 'Venice'
		},
		{
			name: 'William',
			city: 'Sydney'
		}
	];

});

app.filter("capitalCase", function() {
	return function (input) {
		return input.charAt(0).toUpperCase() + input.slice(1);
	}
});
