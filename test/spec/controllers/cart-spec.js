'use strict';

describe('Controller: CartCtrl', function () {
  var ItemsService, $scope, createController, CartService, cartItem;

  beforeEach(function () {
    module('letusgoAngularJsApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      ItemsService = $injector.get('ItemsService');
      CartService = $injector.get('CartItemService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('CartCtrl', {
          $scope: $scope,
          CartService: CartService,
          ItemsService: ItemsService
        });
      };
    });
    cartItem = [{category:'fruit',
                item:[{item:{category:'fruit',name:'apple',unit:'斤',price:'5.50'},
                       num:3}]}];
  });

  it('emit from parent controller', function() {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('parentCart');
  });


});
