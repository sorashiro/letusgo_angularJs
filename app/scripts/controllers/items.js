'use strict';

angular.module('letusgoAngularJsApp').controller('ItemsCtrl', function($scope, itemsService) {

  $scope.items = itemsService.items();
  $scope.$emit('_parent_count');

  $scope.addToCart = function(item){
    $scope.$emit('_parent_count');
    itemsService.addToCart(item);
  };
});
