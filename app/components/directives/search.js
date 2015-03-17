'user strict'

angular.module("goRemote")
	.directive('searchBox', function() {
		return {
			replace: true,
			restrict: 'E',
			templateUrl: "templates/directives/search.html",
			scope: {
				isVisible: '@'
			},
			controller: function($scope) {
				$scope.isVisible = true;
				
				$scope.toggleSearch = function() {
					$scope.isVisible = !$scope.isVisible;
				};

			},
			link: function(scope, element, attrs, controller) {
				scope.$watch('isVisible', function(oldValue, newValue){
					console.log($(element));
				})
			},
			
		}
	});