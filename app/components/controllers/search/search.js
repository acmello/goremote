'use strict'

angular.module('goRemote')
	.controller('SearchController', ['$scope', function($scope){
		$scope.isVisible = true;
				
		$scope.toggleSearch = function() {
			$scope.isVisible = !$scope.isVisible;
		};
	}])