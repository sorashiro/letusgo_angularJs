'use strict';

describe('Controller: IndexCtrl', function () {
  var ItemsService, $scope, createController;

  beforeEach(function () {
    module('letusgoAngularJsApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      ItemsService = $injector.get('ItemsService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('ItemsCtrl', {
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
});
