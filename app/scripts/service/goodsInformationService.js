'use strict';

angular.module('letusgoAngularJsApp').service('goodsInformationService', function(localStorageService, itemsService){

  this.addGoods = function(category, name, unit, price){
    var items = itemsService.loadItems();
    items.push({"category": category, "name": name, "unit": unit, "price": price});
    itemsService.add('newList', items);
  };

  this.remove = function(goodsInformation){
    var items = itemsService.loadItems();
    for (var i = 0; i < items.length; i++){
      if (goodsInformation.name === items[i].name){
        items.splice(i, 1);
      }
    }
    itemsService.add('newList', items);
  };

  this.change = function(goodsInformation){
    var items = itemsService.loadItems();
    var item;
    for (var i = 0; i < items.length; i++){
      if (goodsInformation.name === items[i].name){
        item = [items[i]];
      }
      itemsService.add('modifyItem', item);
    }
  };

  this.getItem = function(){
    var item = itemsService.get('modifyItem');
    return item;
  };

  this.getCategory = function(){
    var item = this.getItem();
    return item[0].category;
  };

  this.modify = function(category, name, unit, price){
    var items = itemsService.get('newList');
    var item = this.getItem();
    var newItem = {"category": category, "name": name, "unit": unit, "price": price};
    for (var i = 0; i < items.length; i++){
      if (item[0].name === items[i].name){
        items.splice(i, 1, newItem);
        break;
      }
    }
    itemsService.add('newList', items);
  };
});
