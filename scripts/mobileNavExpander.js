(function() {
	var app = angular.module('mobileNavExpander', []);
	app.controller('navExpand', function($scope) {
		$scope.navHide = true;
		$scope.toggle = function() {
			
			$scope.navHide = !$scope.navHide;
		};
	})

	

	//alert("This worked");
})();