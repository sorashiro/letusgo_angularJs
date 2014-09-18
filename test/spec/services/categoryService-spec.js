'use strict';

describe('Controller: CategoryService', function () {
  var $scope, localStorageService, CategoryService, ItemsService, itemsList, categories;

  beforeEach(function () {
    module('letusgoAngularJsApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      localStorageService = $injector.get('localStorageService');
      ItemsService = $injector.get('ItemsService');
      CategoryService = $injector.get('CategoryService');
    });

    itemsList = [
      {'category':'fruit','name':'apple','unit':'斤','price':'5.50'},
      {'category':'fruit','name':'leechee','unit':'斤','price':'15.00'},
      {'category':'food','name':'sprite','unit':'瓶','price':'3.00'},
      {'category':'food','name':'coca-cola','unit':'瓶','price':'3.00'},
      {'category':'livingGoods','name':'battery','unit':'个','price':'2.00'}];
    categories = ['fruit','food','livingGoods'];
  });

  it('should load category', function() {
    spyOn(ItemsService, 'get').andReturn(itemsList);
    spyOn(ItemsService, 'add');
    var categories = CategoryService.loadCategory();
    expect(ItemsService.get).toHaveBeenCalledWith('itemsList');
    expect(categories).toEqual(categories);
  });

  it('should add new category', function() {
    var category = 'book';
    spyOn(ItemsService, 'get').andReturn(itemsList);
    spyOn(CategoryService, 'loadCategory').andReturn(categories);
    spyOn(ItemsService, 'add');

    CategoryService.addCategory(category);

    expect(ItemsService.get).toHaveBeenCalledWith('itemsList');
    expect(ItemsService.add).toHaveBeenCalled();
    expect(categories).toEqual(['fruit','food','livingGoods','book']);

  })

});
