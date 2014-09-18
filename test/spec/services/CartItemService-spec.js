'use strict';

describe('Controller: CartService', function () {
  var $scope, localStorageService, CartService, items, cartList;

  beforeEach(function () {
    module('letusgoAngularJsApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      localStorageService = $injector.get('localStorageService');
      CartService = $injector.get('CartItemService');
    });

    var item1 = {'category': 'fruit', 'name': 'apple', 'unit': '斤', 'price': '5.50'};
    var item2 = {'category': 'fruit', 'name': 'leechee', 'unit': '斤', 'price': '15.00'};
    var item3 = {'category': 'food', 'name': 'sprite', 'unit': '瓶', 'price': '3.00'};
    var item4 = {'category': 'food', 'name': 'coca-cola', 'unit': '瓶', 'price': '3.00'};
    var item5 = {'category': 'livingGoods', 'name': 'battery', 'unit': '个', 'price': '2.00'};
    var item6 = {'category': 'book'};
    items = [item1, item2, item3, item4, item5, item6];
    cartList = [{'item':{'category':'fruit','name':'apple','unit':'斤','price':'5.50'},'num':1}];
  });

  it('should return cartList', function() {
    spyOn(localStorageService, 'get').andReturn(cartList);
    var cartLists = CartService.cartList();

    expect(cartLists).toBe(cartList);
    expect(localStorageService.get).toHaveBeenCalledWith('cartList');
  });
});
