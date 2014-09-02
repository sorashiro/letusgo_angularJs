'use strict';

angular.module('letusgoAngularJsApp')
   .controller('ItemsCtrl', function ($scope) {
     $scope.awesomeThings = [
       'HTML5 Boilerplate',
       'AngularJS',
       'Karma'
     ];

   });
var items = angular.module('items', []);

angular.module('letusgoAngularJsApp').controller('ItemsCtrl', function($scope, $http){
    $http.get('json/items.json').success(function(data){
        $scope.items = data;
    });
    var id;
    if (localStorage.clickcount){
        $scope.count = localStorage.clickcount;
    }
    else{
        $scope.count = 0;
    }
   $scope.click = function(target){
       clickSum();
       $scope.count = localStorage.clickcount;
       id = target.getAttribute('id');
       var i = getItem(id)+1;
       addItem(id, i);
   }
});











//angular.module('letusgoAngularJsApp')
//    .controller('ItemsCtrl', function ($scope, localStorageService) {
//
//        var itemsInStore = localStorageService.get('items');
//
//        $scope.items = itemsInStore && itemsInStore.split('\n') || [];
//
//        $scope.$watch('items', function () {
//            localStorageService.add('items', $scope.items.join('\n'));
//        }, true);
//
//        $scope.addItem = function () {
//            $scope.items.push($scope.item);
//            $scope.item = '';
//        };
//
//        $scope.removeItme = function (index) {
//            $scope.items.splice(index, 1);
//        };
//
//    });