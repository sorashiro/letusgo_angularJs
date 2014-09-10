'use strict';

angular.module('letusgoAngularJsApp').service('goodsInformationService', function(localStorageService, itemsService){

  this.loadGoodsInformations = function(){
    var items = itemsService.get('itemsList');
    return items;
  }
});
