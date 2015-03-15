'use strict';

/**
 * @ngdoc directive
 * @name pmsV1FrontEndApp.directive:dialog
 * @description
 * # dialog
 */
angular.module('pmsV1FrontEndApp')
  .directive('ngConfirmClick', function () {
    return {
        priority: 1,
        terminal: true,
        link: function (scope, element, attr) {
            var msg = attr.ngConfirmClick || "Are you sure?";
            var clickAction = attr.ngClick;
            element.bind('click',function (event) {
                if ( window.confirm(msg) ) {
                    scope.$eval(clickAction)
                }
            });
        }
    };
  });
