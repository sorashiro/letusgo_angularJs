'use strict';

angular.module('letusgoAngularJsApp')
  .controller('IndexCtrl', function ($scope, itemsService) {

    $scope.count = itemsService.get('clickcount') || 0;

    $scope.$on('_parent_count', function () {
      $scope.count = itemsService.count();
      $scope.count = itemsService.get('clickcount');
    });

    $scope.$on('_parent_count===0', function () {

      $scope.count = 0;
    });

  });

