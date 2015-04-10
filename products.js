(function(){
	var app = angular.module('store-products', []);

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productGallery', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-gallery.html',
			controller: function(){
				this.currentIndex = 0;
				this.setCurrent = function(current) {
					this.currentIndex = current || 0;
				};
			},
			controllerAs: 'gallery'
		};
	});	

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});

	app.directive('productDescription', function(){
    	return {
    		restrict: 'E',
    		templateUrl: 'product-description.html',
 		};
	});

	app.directive('productSpecs', function(){
    	return {
    		restrict: 'A',
    		templateUrl: 'product-specs.html',
 		};
	});

	app.directive('productReviews', function(){
    	return {
    		restrict: 'E',
    		templateUrl: 'product-reviews.html',
 		};
	});
})();