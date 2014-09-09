'use strict';

angular.module('letusgoAngularJsApp').controller('CartCtrl', function($scope, cartItemService){

  var categorys = [];
  var cartLists = [];


  $scope.cartItems = cartItemService.category(categorys, cartLists);

  $scope.reduce = function(cartItem){

    cartItemService.reduceNumber(cartItem);
    $scope.cartItems = cartItemService.category(categorys, cartLists);
  };

  $scope.plus = function(cartItem){
    cartItemService.plusNumber(cartItem);
    $scope.cartItems = cartItemService.category(categorys, cartLists);
  }

});
