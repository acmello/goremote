'user strict'

angular.module("goRemote")
	.controller('PositionIndexController', ['$scope',
		'PositionFactory', 'DateRanges', function($scope, PositionFactory, DateRanges){

		// constants for the drop down
		$scope.dateRanges = DateRanges;

		// load data from server
		$scope.positions = PositionFactory.get();


		$scope.dateAfter = {name: 'All items', date: moment().subtract(10, 'year')};
	}]);