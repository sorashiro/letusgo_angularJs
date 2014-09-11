'use strict';

angular.module('letusgoAngularJsApp').service('goodsInformationService', function(localStorageService, itemsService){

  this.addGoods = function(category, name, unit, price){
    var items = itemsService.loadItems();
    items.push({"category": category, "name": name, "unit": unit, "price": price});
    itemsService.add('itemsList', items);
  };

  this.remove = function(goodsInformation){
    var items = itemsService.loadItems();
    for (var i = 0; i < items.length; i++){
      if (goodsInformation.name === items[i].name){
        items.splice(i, 1);
      }
    }
    itemsService.add('itemsList', items);
  };

  this.getItem = function(){
    var item = itemsService.get('modifyItem');
    return item;
  };

  this.change = function(goodsInformation){
    var items = itemsService.loadItems();
    var item = [];
    for (var i = 0; i < items.length; i++){
      if (goodsInformation.name === items[i].name){
        item.push(items[i]);
      }
      itemsService.add('modifyItem', item);
    }
  }
});
