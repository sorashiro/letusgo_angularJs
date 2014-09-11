'use strict';

angular.module('letusgoAngularJsApp').controller('ModifyGoodsCtrl', function($scope, goodsInformationService, itemsService){

  $scope.items = goodsInformationService.getItem();
});
