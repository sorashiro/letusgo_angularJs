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
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'IndexCtrl'
      })
      .when('/items', {
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/pay', {
        templateUrl: 'views/pay.html',
        controller: 'PayCtrl'
      })
      .when('/categoryManager', {
        templateUrl: 'views/categoryManager.html',
        controller: 'CategoryCtrl'
      })
      .when('/goodsInformationManager', {
        templateUrl: 'views/goodsInformationManager.html',
        controller: 'GoodsInformationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
