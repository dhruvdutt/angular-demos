var app = angular.module('MyApp', []);

app.controller('MyController', function($scope, $http){

	var src = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2a7f6cb0b6914e0628d4a536de3ec30a";

	$scope.movieNames = [];

	$scope.getData = function(){
		$http.get(src)
			.then(function(response) {
				$scope.movieNames = response.data.results;
			});
	}

});
