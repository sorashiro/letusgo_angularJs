'use strict';

angular.module('letusgoAngularJsApp')
  .controller('IndexCtrl', function ($scope, ItemsService) {

    ItemsService.items();

    $scope.count = ItemsService.get('clickcount') || 0;

    $scope.$on('parentCount', function () {
      $scope.count = ItemsService.get('clickcount');
    });

  });

