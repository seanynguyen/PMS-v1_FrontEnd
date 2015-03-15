'use strict';

describe('Service: statusItem', function () {

  // load the service's module
  beforeEach(module('pmsV1FrontEndApp'));

  // instantiate service
  var statusItem;
  beforeEach(inject(function (_statusItem_) {
    statusItem = _statusItem_;
  }));

  it('should do something', function () {
    expect(!!statusItem).toBe(true);
  });

});
