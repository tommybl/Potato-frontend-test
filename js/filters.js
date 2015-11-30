'use strict';

/* Filters */

var potatoTaskFilters = angular.module('potatoTaskFilters', []);

potatoTaskFilters.filter('author', function() {
    return function (input) {
        input = input.split(/\((.+)?/)[1];
        input = input.substring(0, input.lastIndexOf(')'));
        return input;
    };
});

potatoTaskFilters.filter('published', function() {
    return function (input) {
        var d = new Date(input);
        var day = d.getDate() + "";
        var last = day.charAt(day.length - 1);
        if (last == '1') day += "st";
        else if (last == '2') day += "nd";
        else if (last == '3') day += "rd";
        else day += "th";
        var month = d.getMonth();
        if (month == 0) month = "Jan";
        else if (month == 1) month = "Feb";
        else if (month == 2) month = "Mar";
        else if (month == 3) month = "Apr";
        else if (month == 4) month = "May";
        else if (month == 5) month = "Jun";
        else if (month == 6) month = "Jul";
        else if (month == 7) month = "Aug";
        else if (month == 8) month = "Sep";
        else if (month == 9) month = "Oct";
        else if (month == 10) month = "Nov";
        else if (month == 11) month = "Dec";
        var year = d.getFullYear();
        var hours = d.getHours();
        if (hours < 10) hours = "0" + hours;
        var min = d.getMinutes();
        if (min < 10) min = "0" + min;

        return day + " " + month + " " + year + " at " + hours + ":" + min;
    };
});

potatoTaskFilters.filter('tags', function() {
    return function (input) {
        input = input.split(" ");
        var tags = "";
        for (var k = 0; k < input.length; k++) {
            tags += "<a class='item-tag' href='https://www.flickr.com/search/?tags=" + input[k] + "' target='_blank'>" + input[k] + "</a>";
        }
        return "<p>" + tags + "</p>";
    };
});