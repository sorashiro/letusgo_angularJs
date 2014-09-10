'use strict';

angular.module('letusgoAngularJsApp').controller('GoodsInformationCtrl', function($scope, itemsService, categoryService, goodsInformationService){

  $scope.loadGoodsInformations = itemsService.loadItems();
  $scope.categorys = categoryService.loadCategory();
  $scope.categoryName = "分类名称";
  $scope.getName = function(category){
    $scope.categoryName = category;
  };

  $scope.addGoods = function(){

    var name = $scope.name;
    var unit = $scope.unit;
    var price = $scope.price;
    goodsInformationService.addGoods($scope.categoryName, name, unit, price);
  };

  $scope.remove = function(goodsInformation){
    goodsInformationService.remove(goodsInformation);
    $scope.loadGoodsInformations = itemsService.loadItems();
  }
});
