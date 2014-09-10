'use strict';

angular.module('letusgoAngularJsApp').service('goodsInformationService', function(localStorageService, itemsService){

  this.loadGoodsInformations = function(){
    var items = itemsService.get('itemsList');
    return items;
  };

  this.addGoods = function(category, name, unit, price){
    var items = this.loadGoodsInformations();
    items.push({"category": category, "name": name, "unit": unit, "price": price});
    itemsService.add('itemsList', items);
  };
});
