angular
.module('frontendApp', [
    'ngTouch',
    'ngResource',
    'ngCookies',
    'ui.router',
    'oc.lazyLoad'
])
.constant('APP_CONFIG', /* @echo APP_CONFIG */)
.value('debug', true);
