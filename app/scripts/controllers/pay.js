'use strict';

angular.module('letusgoAngularJsApp').controller('PayCtrl', function($scope, $http) {
    $http.get('json/items.json').success(function (data) {
        $scope.items = data;
        var cartItems = [];
        $scope.date = new Date().toLocaleString();
        var total = 0;
        for(var i = 0; i < data.length; i++){
            var itemNumber = getItem($scope.items[i].name);
            if(itemNumber){
                $scope.items[i].quantity = itemNumber;
                cartItems.push($scope.items[i]);
                total += $scope.items[i].price * itemNumber;
            }
        }
        $scope.total = total;
        $scope.cartItems = cartItems;
        $scope.account = function(){
            localStorage.clear();
            alert('付款成功，期待您下次光临！')
        }

    });
});