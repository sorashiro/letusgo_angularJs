'use strict';

angular.module('letusgoAngularJsApp')
   .controller('ItemsCtrl', function ($scope) {
     $scope.awesomeThings = [
       'HTML5 Boilerplate',
       'AngularJS',
       'Karma'
     ];

   });

var items = angular.module('items', []);

angular.module('letusgoAngularJsApp').controller('ItemsCtrl', function($scope, itemsService) {

    $scope.items = itemsService.items();

});
