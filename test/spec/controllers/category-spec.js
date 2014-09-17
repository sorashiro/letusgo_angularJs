'use strict';

describe('Controller: ItemsCtrl', function () {
  var CategoryService, $scope, createController;

  beforeEach(function () {
    module('letusgoAngularJsApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      CategoryService = $injector.get('CategoryService');

      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('CategoryCtrl', {
          $scope: $scope,
          CategoryService: CategoryService
        });
      };
    });
  });

  it('emit from parent controller', function() {
    spyOn($scope, '$emit');
    createController();
    expect($scope.$emit).toHaveBeenCalledWith('parentManage');
  });

  it('should load categories', function() {
    spyOn(CategoryService, 'loadCategory');
    createController();
    $scope.categorys = CategoryService.loadCategory();
    expect(CategoryService.loadCategory).toHaveBeenCalled();
  });

  it('add new category', function() {
    spyOn(CategoryService, 'addCategory');
    createController();
    var category = '1';
    CategoryService.addCategory(category);
    expect(CategoryService.addCategory).toHaveBeenCalledWith(category);
  });

  it('remove category', function() {
    spyOn(CategoryService, 'removes');
    spyOn(CategoryService, 'loadCategory');
    createController();
    $scope.removes();
    expect(CategoryService.removes).toHaveBeenCalled();
    expect(CategoryService.loadCategory).toHaveBeenCalled();
  });

  it('should change category name', function() {
    spyOn(CategoryService, 'modify');
    createController();
    $scope.change();
    expect(CategoryService.modify).toHaveBeenCalled();
  });

});
