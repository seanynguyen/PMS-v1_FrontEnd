

'use strict';

/**
 * @ngdoc overview
 * @name pmsV1FrontEndApp
 * @description
 * # pmsV1FrontEndApp
 *
 * Main module of the application.
 */
angular
  .module('pmsV1FrontEndApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'restangular',
    'ui.bootstrap',
    'angularFileUpload'
  ])
  .config(['RestangularProvider', '$httpProvider', function(RestangularProvider, $httpProvider) {
    RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});
    RestangularProvider.setBaseUrl('http://178.62.14.29:8080/PMS-1.5/rest/');
    RestangularProvider.setRestangularFields({
      selfLink: 'self.link'
    });
  }])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/main');
    
    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: 'views/app.html'
      })
      .state('app.main', {
        url: '/main',
        templateUrl: 'views/main.html'
      })
      .state('app.status', {
        url: '/statusItem',
        templateUrl: 'views/statusItem/list.html',
        controller: 'StatusItemCtrl'
      })
      .state('app.category', {
        url: '/categories',
        templateUrl: 'views/categories/list.html',
        controller: 'CategoryCtrl'
      })

  }])
