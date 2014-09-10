'use strict';

angular.module('letusgoAngularJsApp').controller('CategoryCtrl', function($scope, categoryService, localStorageService){

  $scope.categorys = categoryService.loadCategory();
});
