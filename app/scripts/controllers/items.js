'use strict';

angular.module('letusgoAngularJsApp').controller('ItemsCtrl', function ($scope, ItemsService) {

  var cartList = [];
  var names = [];

  $scope.items = ItemsService.loadItems();
  $scope.$emit('_parent_count');

  $scope.addToCart = function (item) {

    $scope.count = ItemsService.count();
    $scope.$emit('_parent_count');
    ItemsService.addToCart(cartList, names, item);
  };
});
