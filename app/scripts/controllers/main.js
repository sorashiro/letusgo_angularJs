'use strict';

/**
 * @ngdoc function
 * @name letusgoAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the letusgoAngularJsApp
 */
angular.module('letusgoAngularJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
