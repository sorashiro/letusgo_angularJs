'use strict';

angular.module('letusgoAngularJsApp').service('itemsService', function(localStorageService){

  this.items = function(){

    var itemsList = [
      {
        "category": "fruit", "name": "apple", "unit": "斤", "price": "5.50", "quantity": "0"
      },
      {
        "category": "fruit", "name": "leechee", "unit": "斤", "price": "15.00", "quantity": "0"
      },
      {
        "category": "food", "name": "sprite", "unit": "瓶", "price": "3.00", "quantity": "0"
      },
      {
        "category": "food", "name": "coca-cola", "unit": "瓶", "price": "3.00", "quantity": "0"
      },
      {
        "category": "livingGoods", "name": "battery", "unit": "个", "price": "2.00", "quantity": "0"
      }
    ];
    localStorageService.set('itemsList', itemsList);
    return itemsList;
  };

  this.count = function(){
    var count = localStorageService.get(clickCount);
    localStorageService.set('clickCount', count);
    return count;

  };

  this.addTocart = function(item){

  };

  this.add = function(key, value){
    return localStorageService.set(key, value);
  };

  this.get = function(key){
    return localStorageService.get(key);
  };



});
