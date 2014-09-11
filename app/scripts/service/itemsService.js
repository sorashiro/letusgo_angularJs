'use strict';

angular.module('letusgoAngularJsApp').service('itemsService', function(localStorageService){

  this.items = function(){

    var itemsList = [
      {
        "category": "fruit", "name": "apple", "unit": "斤", "price": "5.50"
      },
      {
        "category": "fruit", "name": "leechee", "unit": "斤", "price": "15.00"
      },
      {
        "category": "food", "name": "sprite", "unit": "瓶", "price": "3.00"
      },
      {
        "category": "food", "name": "coca-cola", "unit": "瓶", "price": "3.00"
      },
      {
        "category": "livingGoods", "name": "battery", "unit": "个", "price": "2.00"
      }
    ];
    localStorageService.set('itemsList', itemsList);
    return itemsList;
  };

  this.loadItems = function(){
    var item = localStorageService.get('newList');
    for (var i = 0; i < item.length; i++){
      if (!item[i].name){
        item.splice(i, 1);
        i--;
      }
    }
    localStorageService.set('newList', item);
    return item;
  };

  this.count = function(){
    var count;

    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    }
    else {
      localStorage.clickcount = 1;
    }

    count = Number(localStorage.clickcount);
    localStorageService.set('clickcount', count);

    return count;

  };

  this.addToCart = function(cartList, names, item){

    var name, num;
    var cart;
    name = item.name;
    num = 1;
    cart = {"item": item, "num": num};
    var has = names.indexOf(name);

    if(has === -1){
      cartList.push(cart);
      names.push(name);
    }
    else{
      for (var i = 0; i < cartList.length; i++){
        if (cartList[i].item.name === name){
          cartList[i].num++;
        }
      }
    }
      localStorageService.set('cartList', cartList);
  };

  this.add = function(key, value){
    return localStorageService.set(key, value);
  };

  this.get = function(key){
    return localStorageService.get(key);
  };



});
