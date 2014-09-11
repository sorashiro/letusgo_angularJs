'use strict';

angular.module('letusgoAngularJsApp').controller('ModifyGoodsCtrl', function($scope, categoryService, goodsInformationService, itemsService){

  $scope.item = goodsInformationService.getItem();
  $scope.categorys = categoryService.loadCategory();
  $scope.categoryName = goodsInformationService.getCategory();
  $scope.changeName = function(category){
    $scope.categoryName = category;
  };

  $scope.modify = function(){
    var name = $scope.name;
    var unit = $scope.unit;
    var price = $scope.price;
    goodsInformationService.modify($scope.categoryName, name, unit, price);
    alert('修改成功！');
  }
});
