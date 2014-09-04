'use strict';

angular.module('letusgoAngularJsApp').service('itemsService', function(localStorageService){

    this.items = function(){

      var itemsList = [
        {
          "type": "fruit", "name": "apple", "unit": "斤", "price": "5.50", "quantity": "0"
        },
        {
          "type": "fruit", "name": "leechee", "unit": "斤", "price": "15.00", "quantity": "0"
        },
        {
          "type": "food", "name": "sprite", "unit": "瓶", "price": "3.00", "quantity": "0"
        },
        {
          "type": "food", "name": "coca-cola", "unit": "瓶", "price": "3.00", "quantity": "0"
        },
        {
          "type": "livingGoods", "name": "battery", "unit": "个", "price": "2.00", "quantity": "0"
        }
      ];
      localStorageService.set('itemsList', itemsList);
      return itemsList;
    }


});
