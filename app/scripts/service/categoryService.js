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
    var newItem = {"category": category};

    items.push(newItem);
    categorys.push(category);
    itemsService.add('itemsList', items);
    itemsService.add('categorys', categorys);
  };

  this.removes = function(category){
    var items = itemsService.get('itemsList');
    for (var i = 0; i < items.length; i++){
      if (category === items[i].category){
        if(items[i].name){
          alert("该分类下有商品，不能删除！");
          break;
        }
        else {
          items.splice(i, 1);
          i--;
        }
      }
    }
    itemsService.add('itemsList', items);
  };

  this.modify = function(category){
    var categoryName = category;
    itemsService.add('modifyCategory', categoryName);
  };

  this.getName = function(){
    var category = itemsService.get('modifyCategory');
    return category;
  };

  this.modifyCategory = function(category, newName){
    var items = itemsService.get('itemsList');
    for (var i = 0; i < items.length; i++){
      if (category === items[i].category){
        items[i].category = newName;
      }
    }
    itemsService.add('itemsList', items);
  };

});
