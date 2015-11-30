'use strict';

/* App Module */

var potatoTaskApp = angular.module('potatoTaskApp', ['ngRoute', 'ngAnimate', 'potatoTaskControllers', 'potatoTaskServices', 'potatoTaskFilters', 'ngSanitize', 'angulike']);

potatoTaskApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        }).
            when('/items/:itemId', {
            templateUrl: 'partials/item.html',
            controller: 'ItemCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
