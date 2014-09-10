'use strict';

angular.module('letusgoAngularJsApp').controller('CategoryCtrl', function($scope, categoryService, localStorageService){

  $scope.categorys = categoryService.loadCategory();

  $scope.addCategory = function(){
    var category = $scope.input;
    categoryService.addCategory(category);
  };

  $scope.removes = function(category){

    categoryService.removes(category);
    $scope.categorys = categoryService.loadCategory();

  }
});
