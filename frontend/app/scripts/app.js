'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
.module('frontendApp')
.config(['$resourceProvider', function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$ocLazyLoadProvider',
    '$httpProvider',
    function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $httpProvider) {

        $ocLazyLoadProvider.config({
            debug: true,
            events: true,
        });

        $urlRouterProvider.otherwise('/login');

        $stateProvider
        .state('login',{
            templateUrl: 'views/pages/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm',
            url: '/login',
            resolve: {
                loadMyDirectives:function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'frontendApp',
                            files:[
                                'scripts/controllers/login.js',
                                'scripts/services/users.js'
                            ]
                        });
                }
            }
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html',
            resolve: {
                loadMyDirectives:function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'frontendApp',
                            files:[
                                'scripts/directives/header/header.js',
                                'scripts/directives/sidebar/sidebar.js'
                            ]
                        });
                }
            }
        })
        .state('home.dashboard', {
            url: '/dashboard',
            controller: 'MainCtrl',
            templateUrl: 'views/dashboard/home.html',
            resolve: {
                loadMyDirectives: function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'frontendApp',
                            files:[
                                'scripts/controllers/main.js'
                            ]
                        });
                }
            }
        });
    }
]);

