'use strict';

angular.module('letusgoAngularJsApp').service('cartItemService', function(localStorageService){

  this.cartList = function(cartLists){
    cartLists = localStorageService.get('cartList');
    return cartLists;
  };
  this.category = function(categorys, cartLists){
    cartLists = localStorageService.get('cartList');
    var category;
    for (var i = 0; i < cartLists.length; i++){
      category = cartLists[i].item.category;
      categorys.push(category);
    }
    for (var k = 0; k < categorys.length; k++){
      var item = [];
      for (var j = 0; j < cartLists.length; j++){
        if (categorys[k] === cartLists[j].item.category){
          item.push(cartLists[j]);
        }
      }
      localStorageService.set(categorys[k], item);
    }

  }

});
