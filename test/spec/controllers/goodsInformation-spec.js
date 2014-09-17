'use strict';

describe('Controller: CartCtrl', function () {
  var $scope, createController, ItemsService, CategoryService, GoodsService;

  beforeEach(function () {
    module('letusgoAngularJsApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      CategoryService = $injector.get('CategoryService');
      ItemsService = $injector.get('ItemsService');
      GoodsService = $injector.get('GoodsInformationService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('GoodsInformationCtrl', {
          $scope: $scope,
          ItemsService: ItemsService,
          GoodsService: GoodsService,
          CategoryService: CategoryService
        });
      };
    });
  });

  it('emit from parent controller', function() {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('parentManage');
  });

  it('should load goods information', function() {
    spyOn(ItemsService, 'loadItems');
    createController();
    $scope.loadGoodsInformations = ItemsService.loadItems();
    expect(ItemsService.loadItems).toHaveBeenCalled();
  });

  it('should load category', function() {
    spyOn(CategoryService, 'loadCategory');
    createController();
    $scope.categorys = CategoryService.loadCategory();
    expect(CategoryService.loadCategory).toHaveBeenCalled();
  })

});
