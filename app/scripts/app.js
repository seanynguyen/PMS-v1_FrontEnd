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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
