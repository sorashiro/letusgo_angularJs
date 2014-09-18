'use strict';

describe('Controller: ItemsService', function () {
  var $scope, localStorageService, ItemsService, items;

  beforeEach(function () {
    module('letusgoAngularJsApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      localStorageService = $injector.get('localStorageService');
      ItemsService = $injector.get('ItemsService');
    });

    var item1 = {'category': 'fruit', 'name': 'apple', 'unit': '斤', 'price': '5.50'};
    var item2 = {'category': 'fruit', 'name': 'leechee', 'unit': '斤', 'price': '15.00'};
    var item3 = {'category': 'food', 'name': 'sprite', 'unit': '瓶', 'price': '3.00'};
    var item4 = {'category': 'food', 'name': 'coca-cola', 'unit': '瓶', 'price': '3.00'};
    var item5 = {'category': 'livingGoods', 'name': 'battery', 'unit': '个', 'price': '2.00'};
    var item6 = {'category': 'book'};
    items = [item1, item2, item3, item4, item5, item6];
  });

  it('should return itemsList', function() {
    spyOn(localStorageService, 'set');
    var items = ItemsService.items();
    expect(localStorageService.set).toHaveBeenCalled();
    expect(items.length).toBe(5);
    expect(items[0].name).toBe('apple');
    expect(items[2].name).toBe('sprite');
    expect(items[4].name).toBe('battery');
  });

  it('should load items', function() {
    spyOn(localStorageService, 'get').andReturn(items);
    spyOn(localStorageService, 'set');
    var itemsList = ItemsService.loadItems();

    expect(localStorageService.set).toHaveBeenCalled();
    expect(localStorageService.get).toHaveBeenCalled();
    expect(itemsList.length).toBe(5);
  });

  it('should increase count', function() {
    spyOn(ItemsService, 'get').andReturn(1);
    spyOn(ItemsService, 'add');
    var count = ItemsService.count();

    expect(count).toBe(2);
    expect(ItemsService.get).toHaveBeenCalled();
    expect(ItemsService.add).toHaveBeenCalled();
  });

  it('should reduce count', function() {
    spyOn(ItemsService, 'add');
    spyOn(ItemsService, 'get').andReturn(3);
    var count = ItemsService.reduceCount();

    expect(count).toBe(2);
    expect(ItemsService.add).toHaveBeenCalled();
    expect(ItemsService.get).toHaveBeenCalled();
  })

});
