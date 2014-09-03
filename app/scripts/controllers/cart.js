'use strict';

angular.module('letusgoAngularJsApp').controller('CartCtrl', function($scope, $http) {
    $http.get('json/items.json').success(function (data) {
        $scope.items = data;
        var food = [];
        var fruit = [];
        var livingGoods = [];
        for(var i = 0; i < data.length; i++){
            var itemNumber = getItem($scope.items[i].name);
            if(itemNumber){
                var itemType = $scope.items[i].type;
                if(itemType === 'livingGoods'){
                    $scope.items[i].quantity = itemNumber;
                    livingGoods.push($scope.items[i]);
                }
                if(itemType === 'food'){
                    $scope.items[i].quantity = itemNumber;
                    food.push($scope.items[i]);
                }
                if(itemType === 'fruit'){
                    $scope.items[i].quantity = itemNumber;
                    fruit.push($scope.items[i]);
                }
            }
        }
        $scope.livingGoods = livingGoods;
        $scope.foods = food;
        $scope.fruits = fruit;
        $scope.url = '#/pay';

        $scope.plus = function(target){
            clickSum();
            var name = target.getAttribute('name');
            var sum = getItem(name)+1;
            addItem(name, sum);
            for(var i = 0; i < $scope.items.length; i++){
                if($scope.items[i].name === name){
                    $scope.items[i].quantity += 1;
                }
            }
        };
        $scope.reduce = function(target){
            clickdownSum();
            var item = [];
            var name = target.getAttribute('name');
            var sum = getItem(name)-1;
            addItem(name, sum);
            for(var i =0; i < $scope.items.length; i++){
                if($scope.items[i].name === name){
                    $scope.items[i].quantity -= 1;
                }
            }
        }

    });


});