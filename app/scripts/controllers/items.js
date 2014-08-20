'use strict';

/**
 * @ngdoc function
 * @name letusgoAngularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the letusgoAngularJsApp
 */
// angular.module('letusgoAngularJsApp')
//   .controller('ItemsCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//
//   });
// var items = angular.module('items', []);

angular.module('letusgoAngularJsApp').controller('ItemsCtrl', function($scope){
    $scope.items = [
    {'type': 'fruit',
     'name': 'apple',
     'unit': '斤',
     'price': '5.50元'},
    {'type': 'fruit',
     'name': 'leechee',
     'unit': '斤',
     'price': '15.00元'},
    {'type': 'food',
     'name': 'sprite',
     'unit': '瓶',
     'price': '3.00元'},
    {'type': 'food',
     'name': 'coca-cola',
     'unit': '瓶',
     'price': '3.00元'},
    {'type': 'livingGoods',
     'name': 'battery',
     'unit': '个',
     'price': '2.00元'}
    ];
});
