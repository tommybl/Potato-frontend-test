'use strict';

/* Controllers */

var potatoTaskControllers = angular.module('potatoTaskControllers', []);

potatoTaskControllers.controller('HomeCtrl', ['$rootScope', '$scope', '$location', 'FlickrItems',
function($rootScope, $scope, $location, FlickrItems) {
    $scope.showDetails = function (index) {
        $location.path("items/" + index);
    }

    if ($rootScope.items == undefined) FlickrItems.query();
}]);

potatoTaskControllers.controller('ItemCtrl', ['$rootScope', '$scope', '$routeParams', 'FlickrItems', '$sanitize',
function($rootScope, $scope, $routeParams, FlickrItems, $sanatize) {
    $scope.setItem = function () {
        $scope.item = $rootScope.items[$routeParams.itemId];
        console.log($scope.item);
    };

    if ($rootScope.items == undefined) FlickrItems.query($scope.setItem);
    else $scope.setItem();
}]);