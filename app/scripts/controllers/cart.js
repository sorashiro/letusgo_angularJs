'use strict';

angular.module('letusgoAngularJsApp').controller('CartCtrl', function ($scope, cartItemService) {

  var categorys = [];
  var cartLists = [];
  var cartItems = cartItemService.category(categorys, cartLists);


  if (cartItems.length === 0) {
    $scope.pay = '返回商城';
    $scope.url = '#/items';
  }
  else {
    $scope.cartItems = cartItems;
    $scope.pay = '小二算账';
    $scope.url = '#/pay';

  }

  $scope.reduce = function (cartItem) {

    cartItemService.reduceNumber(cartItem);
    $scope.cartItems = cartItemService.category(categorys, cartLists);
  };

  $scope.plus = function (cartItem) {
    cartItemService.plusNumber(cartItem);
    $scope.cartItems = cartItemService.category(categorys, cartLists);
  };

});
