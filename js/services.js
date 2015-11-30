'use strict';

/* Services */

var potatoTaskServices = angular.module('potatoTaskServices', []);

potatoTaskServices.factory('FlickrItems', ['$rootScope', '$http', function($rootScope, $http) {
    return {
        query: function (query_callback) {
            $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
            .success(function (data, status, headers, config) {
                $rootScope.items = data.items;
                console.log($rootScope.items);
                if (query_callback != undefined) query_callback();
            })
            .error(function (data, status, headers, config) {
                $rootScope.items = undefined;
                console.log("error");
            });
        }
    };
}]);