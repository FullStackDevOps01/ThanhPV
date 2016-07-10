angular
.module('frontendApp', [
    'ngTouch',
    'ngResource',
    'ngCookies',
    'ui.router',
    'oc.lazyLoad',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngAnimate',
    'angular-loading-bar'
])
/* jshint ignore:start */
.constant('APP_CONFIG', /* @echo APP_CONFIG */)
/* jshint ignore:end */
.value('debug', true);
