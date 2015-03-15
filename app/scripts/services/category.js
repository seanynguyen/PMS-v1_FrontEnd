'use strict';

/**
 * @ngdoc service
 * @name pmsV1FrontEndApp.statusItem
 * @description
 * # statusItem
 * Service in the pmsV1FrontEndApp.
 */
angular.module('pmsV1FrontEndApp')
  .service('category', ['Restangular', '$stateParams',
  	function (Restangular, $stateParams) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var category = {
    	init: function() {
    		var self = this;
    		self.categoryObj = {
    			name: '',
	    		description: '',
	    		parentId: ''
    		}
    	},
    	getList: function() {
    		var self = this;
    		Restangular.all("category").getList().then(function(data) {
				  console.log("All ok");
				  self.category = data;
				}, function(response) {
				  console.log("Error with status code", response.status);
				});
    	},
    	delete: function(callback, categoryID) {
        Restangular.one('category', categoryID).remove().then(function() {
          callback();
        }, function(response) {
          console.log("Error with status code", response.status);
        })
    	},
    	edit: function() {

    	},
    	create: function(callback) {
    		var self = this;
    		Restangular.all('category').post(self.categoryObj).then(function(data) {
    			callback(data);
    		}, function(response) {
    			console.log("Error with status code", response.status);
    		})
    	}
    }
    return category;
  }]); 
