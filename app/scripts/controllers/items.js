'use strict';

angular.module('letusgoAngularJsApp').controller('ItemsCtrl', function($scope, itemsService) {

  var cartList = [];
  var names = [];

  $scope.items = itemsService.get('itemsList');
  $scope.$emit('_parent_count');

  $scope.addToCart = function(item){

    $scope.count = itemsService.count();
    $scope.$emit('_parent_count');
    itemsService.addToCart(cartList, names, item);
  };
});
