var app = angular.module('MyApp', ['ui.router']);

app.config(function($stateProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about.html',
    });

});
