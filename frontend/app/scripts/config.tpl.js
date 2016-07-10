angular
.module('frontendApp', [
    'ngTouch',
    'ngResource',
    'ngCookies',
    'ui.router',
    'oc.lazyLoad',
    'ui.bootstrap'
])
.constant('APP_CONFIG', /* @echo APP_CONFIG */)
.value('debug', true);
