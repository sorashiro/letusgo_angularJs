'use strict';

describe('Controller: IndexCtrl', function () {
  var ItemsService, $scope, createController, $rootScope;

  beforeEach(function () {
    module('letusgoAngularJsApp');

    inject(function ($injector) {

      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      ItemsService = $injector.get('ItemsService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('IndexCtrl', {
          $scope: $scope,
          itemService: ItemsService
        });
      };
    });
  });

  it('should load items', function () {
    spyOn(ItemsService, 'items');
    createController();
    ItemsService.items();
    expect(ItemsService.items).toHaveBeenCalled();
  });

  it('emit from parent controller', function() {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('parentHome');
    expect($scope.$emit).toHaveBeenCalledWith('parentCount');
  });

  it('should get correct number', function() {
    createController();
    $scope.$digest();
    spyOn(ItemsService, 'get');

    $rootScope.$broadcast('parentCount');
    $scope.$digest();

    var count = ItemsService.get() || 0;
    expect($scope.count).toBe(count);
  });


});
