'use strict';

describe('Controller: StatusItemCtrl', function () {

  // load the controller's module
  beforeEach(module('pmsV1FrontEndApp'));

  var StatusItemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatusItemCtrl = $controller('StatusItemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
