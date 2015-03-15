'use strict';

/**
 * @ngdoc function
 * @name pmsV1FrontEndApp.controller:StatusItemCtrl
 * @description
 * # StatusItemCtrl
 * Controller of the pmsV1FrontEndApp
 */
angular.module('pmsV1FrontEndApp')
  .controller('StatusItemCtrl', function ($scope, statusItem, $modal) {
  	$scope.statusItem = statusItem;
    $scope.statusItem.init();
    $scope.statusItem.getList();

    $scope.open = function(size) {
    	var modalInstance = $modal.open({
	      templateUrl: 'views/statusItem/modal.html',
	      controller: 'ModalStatusCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });
    };

    $scope.edit = function(statusId) {
      $scope.statusItem.set.actionCreate = false;
      $scope.statusItem.set.actionEdit = true;
      $scope.statusItem.getItem(statusId);
      $scope.open();
    }

    $scope.delete = function(statusID, statusIndex) {
      $scope.statusItem.delete(function() {
        $scope.statusItem.status.slice(statusIndex, 1);
      }, statusID)
    }
    
  })
  .controller('ModalStatusCtrl', function($scope, $modalInstance, statusItem, $upload) {
  	$scope.statusItem = statusItem;
    $scope.statusItem.init();
    console.log($scope.statusItem.statusObj);
  	$scope.create = function() {
  		$scope.statusItem.create(function(data) {
  			$scope.statusItem.status.push(data);
  			$modalInstance.close();
  		});
  	};

    $scope.update = function() {
      $scope.statusItem.update(function() {
        console.log('OK');
      })
    }

  	// $scope.$watch('statusItem.statusObj.imageURL', function () {
   //      $scope.upload($scope.statusItem.statusObj.imageURL);
   //  });

   //  $scope.upload = function (files) {
   //  	console.log(files);
   //      if (files && files.length) {
   //          for (var i = 0; i < files.length; i++) {
   //              var file = files[i];
   //              $upload.upload({
   //              		method: 'POST',
   //              		url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
   //              		transformRequest: angular.identity,
			// 							headers: {'Content-Type': undefined},
   //                  /*fields: {'username': $scope.username},*/
   //                  file: file
   //              }).progress(function (evt) {
   //                  var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
   //                  console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
   //              }).success(function (data, status, headers, config) {
   //                  console.log(data);
   //              });
   //          }
   //      }
   //  };

  	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };


  })
