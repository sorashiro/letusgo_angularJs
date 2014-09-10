'use strict';

angular.module('letusgoAngularJsApp').controller('GoodsInformationCtrl', function($scope, categoryService, goodsInformationService){

  $scope.loadGoodsInformations = goodsInformationService.loadGoodsInformations();
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
  }
});
