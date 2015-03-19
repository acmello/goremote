'use strict'

angular.module('goRemote')
	.filter('dateBetween', function(PositionFactory) {
		return function isAfter(items, dateAfter) {
			return items.filter(function(item) {
				return moment(item.date).isAfter(dateAfter.date);
			});
		};
	});