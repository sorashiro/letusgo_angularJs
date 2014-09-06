'use strict';

angular.module('letusgoAngularJsApp').service('cartItemService', function(localStorageService){

  this.cartList = function(cartLists){
    cartLists = localStorageService.get('cartList');
    return cartLists;
  };


});
