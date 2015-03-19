'use strict'

angular.module('goRemote')
	.filter('momentDate', function() {
		return function(date) {
			return moment(date).format("dddd, MMMM Do YYYY");
		}
	});