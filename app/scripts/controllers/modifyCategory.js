'use strict';

angular.module('letusgoAngularJsApp').controller('ModifyCategoryCtrl', function($scope, categoryService, itemsService){

  $scope.category = categoryService.getName();

  $scope.modifyCategory = function(){
    var newName = $scope.input;
    categoryService.modifyCategory($scope.category, newName);
    alert('修改成功！');
  }
});
