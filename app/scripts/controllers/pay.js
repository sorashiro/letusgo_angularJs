'use strict';

angular.module('letusgoAngularJsApp').controller('PayCtrl', function($scope, itemsService, cartItemService) {

  $scope.date = new Date().toLocaleString();
  $scope.cartItems = itemsService.get('cartList');
  $scope.total = cartItemService.getTotal();
  $scope.account = function(){
    itemsService.remove('cartList');
    itemsService.remove('names');
    itemsService.add('clickcount', 0);
    alert('付款成功，期待您下次光临！')
  }
});
