'use strict';

describe('Directive: dialog', function () {

  // load the directive's module
  beforeEach(module('pmsV1FrontEndApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dialog></dialog>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dialog directive');
  }));
});
