'use strict';

angular.module('frontendApp')
.directive('header', function(){
    return {
        templateUrl:'views/header/header.html',
        restrict: 'E'
    }
});
