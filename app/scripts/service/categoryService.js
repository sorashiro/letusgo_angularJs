'use strict';

angular.module('letusgoAngularJsApp').service('categoryService', function(localStorageService, itemsService){

  this.loadCategory = function(){
    var categorys = [];
    var items = itemsService.get('itemsList');
    for (var i = 0; i < items.length; i++){
      if (categorys.indexOf(items[i].category) === -1) {
        categorys.push(items[i].category);
      }
    }
    itemsService.add('categorys', categorys);
    return categorys;
  };

  this.addCategory = function(category){
    var items = itemsService.get('itemsList');
    var categorys = this.loadCategory();
    var newItem = {};

    newItem = {"category": category};
    items.push(newItem);
    categorys.push(category);
    itemsService.add('itemsList', items);
    itemsService.add('categorys', categorys);
  }
});
