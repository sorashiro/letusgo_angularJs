'use strict';

angular.module('letusgoAngularJsApp').controller('CategoryCtrl', function ($scope, categoryService) {

  $scope.categorys = categoryService.loadCategory();

  $scope.addCategory = function () {
    var category = $scope.input;
    if (category) {
      categoryService.addCategory(category);
      alert('添加成功~');
    }
    else {
      alert('请输入分类名称~');
    }
  };

  $scope.removes = function (category) {

    categoryService.removes(category);
    $scope.categorys = categoryService.loadCategory();

  };

  $scope.change = function (category) {

    categoryService.modify(category);

  };
});
