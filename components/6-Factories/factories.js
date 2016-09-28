var app = angular.module('MyApp', []);

// Defining factory
app.factory("MyFactory", function() {

	// Object to returning
	var factory = {};

	var value;

	factory.getValue = function(){
		return value;
	}

	factory.setValue = function(v){
		value = v;
	}

	return factory;

});

// Controller 1: Injecting MyFactory
app.controller('MyFactoryController', function($scope, MyFactory){

	$scope.setValue = function(inputValue){
		MyFactory.setValue(inputValue);
	};

	$scope.getValue = function(){
		$scope.value = MyFactory.getValue();
	};

});

// Controller 2: Injecting MyFactory
app.controller('MyFactoryController2', function($scope, MyFactory){

	$scope.setValue = function(inputValue){
		MyFactory.setValue(inputValue);
	};

	$scope.getValue = function(){
		$scope.value = MyFactory.getValue();
	};

});
