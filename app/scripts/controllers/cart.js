'use strict';

angular.module('letusgoAngularJsApp').controller('CartCtrl', function($scope, cartItemService, localStorageService){

  var categorys = [];
  var cartLists = [];

  $scope.cartLists = cartItemService.cartList(cartLists);
  cartItemService.category(categorys, cartLists);
  $scope.categorys = categorys;



});
