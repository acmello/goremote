angular.module("goRemote")
	.controller('HomeIndexController', ['$scope','PositionFactory', function($scope, PositionFactory){
		var notes = PositionFactory.get();

		$scope.firstPositions =  notes.slice(0,3);
		$scope.lastPositions =  notes.slice(3,6);
		
	}]);