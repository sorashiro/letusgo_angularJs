'use strict';

describe('Controller: PayCtrl', function () {
  var ItemsService, $scope, createController, CartService, cartList;

  beforeEach(function () {
    module('letusgoAngularJsApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      ItemsService = $injector.get('ItemsService');
      CartService = $injector.get('CartItemService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('PayCtrl', {
          $scope: $scope,
          CartService: CartService,
          ItemsService: ItemsService
        });
      };
    });
    cartList = [{'category': 'fruit', 'name': 'apple', 'unit': '斤', 'price': '5.50'}];
  });

//  it('should use Date function', function() {
//    spyOn(Date(), 'toLocaleString').andReturn('2014.09.16');
//    createController();
//    $scope.date = new Date().toLocaleDateString();
//    expect($scope.date).toHaveBeenCalled();
//  });
  it('should get cartList', function() {
    spyOn(ItemsService, 'get');
    createController();
    $scope.cartItems = ItemsService.get();
    expect(ItemsService.get).toHaveBeenCalled();
  });

});
