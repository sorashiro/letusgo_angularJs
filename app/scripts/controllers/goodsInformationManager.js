'use strict';

angular.module('letusgoAngularJsApp').controller('GoodsInformationCtrl', function($scope, goodsInformationService){

  $scope.loadGoodsInformations = goodsInformationService.loadGoodsInformations();
});
