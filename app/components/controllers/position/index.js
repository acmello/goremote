'user strict'

angular.module("goRemote")
	.controller('PositionIndexController', ['$scope','PositionFactory', function($scope, PositionFactory){
		
		// load data from server
		$scope.positions = PositionFactory.get();


	}]);