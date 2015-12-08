'use strict';

angular.module('myApp.findjob', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/findjob', {
    templateUrl: 'findjob/findjob.html',
    controller: 'findJobCtrl'
  });
}])

.controller('findJobCtrl', [function() {

}]);