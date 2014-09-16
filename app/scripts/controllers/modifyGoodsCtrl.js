'use strict';

angular.module('letusgoAngularJsApp').controller('ModifyGoodsCtrl', function ($scope, CategoryService, GoodsInformationService) {

  $scope.item = GoodsInformationService.getItem();
  $scope.categorys = CategoryService.loadCategory();
  $scope.categoryName = GoodsInformationService.getCategory();
  $scope.changeName = function (category) {
    $scope.categoryName = category;
  };

  $scope.modify = function () {
    var name = $scope.name;
    var unit = $scope.unit;
    var price = $scope.price;
    GoodsInformationService.modify($scope.categoryName, name, unit, price);
    alert('修改成功！');
  };
});
