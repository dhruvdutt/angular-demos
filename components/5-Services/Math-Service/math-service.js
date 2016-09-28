var app = angular.module('MyApp');

app.service('MathService', function(){

	this.square = function(a) {
	  return a * a;
	}

});
