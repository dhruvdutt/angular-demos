var app = angular.module('MyApp', []);

// Defining Service
app.service("MyService", function() {

	var value;

	this.getValue = function(){
		return value;
	}

	this.setValue = function(v){
		value = v;
	}

});

// Controller 1: Injecting MyService
app.controller('MyServiceController', function($scope, MyService){

	$scope.setValue = function(inputValue){
		MyService.setValue(inputValue);
	};

	$scope.getValue = function(){
		$scope.value = MyService.getValue();
	};

});

// Controller 2: Injecting MyService
app.controller('MyServiceController2', function($scope, MyService){

	$scope.setValue = function(inputValue){
		MyService.setValue(inputValue);
	};

	$scope.getValue = function(){
		$scope.value = MyService.getValue();
	};

});
