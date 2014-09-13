'use strict';

angular.module('letusgoAngularJsApp').controller('GoodsInformationCtrl', function ($scope, itemsService, categoryService, goodsInformationService) {

  $scope.loadGoodsInformations = itemsService.loadItems();
  $scope.categorys = categoryService.loadCategory();
  $scope.categoryName = '分类名称';
  $scope.getName = function (category) {
    $scope.categoryName = category;
  };

  $scope.addGoods = function () {

    var name = $scope.name;
    var unit = $scope.unit;
    var price = $scope.price;
    if (name && unit && price && $scope.categoryName !== '分类名称') {
      goodsInformationService.addGoods($scope.categoryName, name, unit, price);
      alert('添加成功~');
    }
    else {
      alert('请选择分类并输入名称、单位、价格～');
    }
  };

  $scope.remove = function (goodsInformation) {
    goodsInformationService.remove(goodsInformation);
    $scope.loadGoodsInformations = itemsService.loadItems();
  };

  $scope.change = function (goodsInformation) {
    goodsInformationService.change(goodsInformation);
  };
});
