'use strict';

angular.module('letusgoAngularJsApp').service('categoryService', function(localStorageService, itemsService){

  this.loadCategory = function(){
    var items = itemsService.items();
    var categorys = [];
    for (var i = 0; i < items.length; i++){
      if (categorys.indexOf(items[i].category) === -1) {
        categorys.push(items[i].category);
      }
    }
    itemsService.add('categorys', categorys);
    return categorys;
  }
});
