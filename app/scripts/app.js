'use strict';

/**
 * @ngdoc overview
 * @name letusgoAngularJsApp
 * @description
 * # letusgoAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('letusgoAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/items', {
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
