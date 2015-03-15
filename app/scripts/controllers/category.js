'use strict';

/**
 * @ngdoc function
 * @name pmsV1FrontEndApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the pmsV1FrontEndApp
 */
angular.module('pmsV1FrontEndApp')
  .controller('CategoryCtrl', function ($scope,category,$modal) {
    $scope.categoryManager = category;
    $scope.categoryManager.init();
    $scope.categoryManager.getList();

    $scope.open = function(size) {
    	var modalInstance = $modal.open({
	      templateUrl: 'views/categories/modal.html',
	      controller: 'ModalCategoryCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });
    };

    $scope.delete = function(categoryId,categoryIndex) {
    	$scope.categoryManager.delete(function() {
    		console.log('OK');
    	}, categoryId)
    }

  })
  .controller('ModalCategoryCtrl', function($scope, $modalInstance, category) {
  	$scope.categoryManager = category;
    $scope.categoryManager.init();
    $scope.categoryManager.getList();

    $scope.create = function() {
    	$scope.categoryManager.create(function(data) {
    		$scope.categoryManager.category.push(data);
    		$modalInstance.close();
    	});
    };

    $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
  })
