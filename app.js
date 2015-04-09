(function(){
	var app = angular.module('store', []);

	//
	// CONTROLLERS
	//
	app.controller('StoreController', function(){
		this.products = gems;
	});

//	app.controller('PanelController', function(){
//		this.tab = 1;
//
//		this.selectTab = function(setTab) {
//			this.tab = setTab;
//		};
//		this.isSelected = function(checkTab) {
//			return this.tab === checkTab;
//		};
//	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	//
	// DIRECTIVES
	//
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
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

	//
	// VARIABLES
	//
	var gems = [
		{
			name: 'Dodecahedon',
			price: 2.95,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
			canPurchase: true,
			images: [
				{
					full: 'assets/images/gems/gem-01.gif'
				},
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
			],
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Origin of the Pentagonal Gem is unknown, hence its low value. It has very high shine and 12 sides, however.',
			canPurchase: true,
			images: [
				{
					full: 'assets/images/gems/gem-02.gif'
				},
			],
			reviews: [
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				},
			],
		},
		{
			name: 'Bloodstone',
			price: 1,
			description: 'Low price, high quality Bloodstone. Very shiny and a great addition to any collection. A must have at this price!',
			canPurchase: true,
			images: [
				{
					full: 'assets/images/gems/gem-03.gif'
				},
			],
			reviews: [
				{
					stars: 3,
					body: "This product was okay.",
					author: "mister@undecided.com"
				},
			],
		},
	];

})();
