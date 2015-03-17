angular.module("goRemote")
	.directive('loadMore', ['', function(){
		// Runs during compile
		return {
			scope: {}, 
			require: '^PositionIndexController', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A',
			link: function($scope, iElm, iAttrs, controller) {
				$scope.loadMoreData = function() {
					$scope.positions = controller.get();
					$('html, body').animate({
						scrollTop: $(document).height() 
					}, 100);
				}	
			}
		};
	}]);