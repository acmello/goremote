angular.module('goRemote')
	.config(function($routeProvider) {

		$routeProvider.when("/", {
			templateUrl: "templates/home/index.html",
			controller: "HomeIndexController"
		})

		.when("/about", {
			templateUrl: "templates/about/index.html",
		})

		.when("/manifest", {
			templateUrl: "templates/manifest/index.html",
		})

		.when("/position", {
			templateUrl: "templates/position/index.html",
			controller: "PositionIndexController"
		})

		.when("/position/new", {
			templateUrl: "templates/position/new.html",
			controller: "PositionCreateController"
		})

		.when("/position/:id", {
			templateUrl: "templates/position/show.html",
			controller: "PositionShowController"
		})

		.otherwise({
			redirectTo: "/"
		});

	});