'use strict';

angular.module('letusgoAngularJsApp').controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if (localStorage.clickcount){
        $scope.count = localStorage.clickcount;
    }
    else{
        $scope.count = 0;
    }

  });
