'use strict'

angular.module("goRemote")
	.controller('PositionShowController', ['$scope', 
		'PositionFactory', function($scope, PositionFactory){
		
		$scope.position = PositionFactory.getById(1);
	}]);