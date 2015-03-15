'use strict';

/**
 * @ngdoc service
 * @name pmsV1FrontEndApp.statusItem
 * @description
 * # statusItem
 * Service in the pmsV1FrontEndApp.
 */
angular.module('pmsV1FrontEndApp')
  .service('statusItem', ['Restangular', '$stateParams',
  	function (Restangular, $stateParams) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var statusItem = {
    	init: function() {
    		var self = this;
    		self.statusObj = {
          id: '',
    			description: '',
	    		statusName: '',
	    		imageURL: ''
    		}
    	},
    	getList: function() {
    		var self = this;
    		Restangular.all("status").getList().then(function(data) {
				  console.log("All ok");
				  self.status = data;
				}, function(response) {
				  console.log("Error with status code", response.status);
				});
    	},
      getItem: function(statusID) {
        var self = this;
        Restangular.one('status', statusID).get().then(function(data) {
          self.statusObj = data;
        }, function() {
          console.log("Error with status code", response.status);
        })
      },
    	delete: function(callback, statusID) {
        Restangular.one('status', statusID).remove().then(function() {
          callback();
        }, function(response) {
          console.log("Error with status code", response.status);
        })
    	},
    	update: function(callback) {
        var self = this;
        var status = Restangular.one('status');
        status.id = self.statusObj.id;
        status.statusName = self.statusObj.statusName;
        status.description = self.statusObj.description;
        console.log(status);
        status.put().then(function() {
          callback();
        });
    	},
    	create: function(callback) {
    		var self = this;
    		Restangular.all('status').post(self.statusObj).then(function(data) {
    			callback(data);
    		}, function(response) {
    			console.log("Error with status code", response.status);
    		})
    	},
      set: {
        actionEdit: false,
        actionCreate: false
      }
    }
    return statusItem;
  }]); 
