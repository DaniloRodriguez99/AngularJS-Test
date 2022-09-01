'use strict';

angular.module('myApp', [
  'myApp.services',
  'ngRoute',
  'ngMaterial',
  'ngMessages',
  'myApp.principal',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/principal'});
}]);
