'use strict';

angular.module('letusgoAngularJsApp').controller('CartCtrl', function($scope, cartItemService){

  var categorys = [];
  var cartLists = [];

  $scope.cartLists = cartItemService.cartList(cartLists);
//  $scope.categorys = cartItemService.category(categorys);
});
