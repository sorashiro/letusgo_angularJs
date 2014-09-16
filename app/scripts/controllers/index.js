'use strict';

angular.module('letusgoAngularJsApp')
  .controller('IndexCtrl', function ($scope, ItemsService) {

    ItemsService.items();

    $scope.count = ItemsService.get('clickcount') || 0;

    $scope.$on('_parent_count', function () {
      $scope.count = ItemsService.count();
      $scope.count = ItemsService.get('clickcount');
    });

    $scope.$on('_parent_count===0', function () {

      $scope.count = 0;
    });
    if (localStorage.clickcount) {
      $scope.count = localStorage.clickcount;
    }
    else {
      $scope.count = 0;
    }

  });

