( function() {
    var app = angular.module( 'store-products', []);

    app.directive( 'productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function() {
                this.tab = 1;
                // panelcontroller method
                this.selectTab = function( setTab ) {
                    this.tab = setTab;
                };
                // another panelcontroller method
                this.isSelected = function( selectTab ) {
                    return this.tab === selectTab;
                };
            },
            controllerAs: 'panel'
        };
    });

    app.directive( 'reviewForms', function() {
        return {
            restrict: 'E',
            templateUrl: 'review-form.html',
            controller: function() {
                this.review = {};

                this.addReview = function( product ) {
                    if ( this.review.terms !== undefined ) {
                        product.reviews.push(this.review );
                        this.review = {};
                    } else {
                        alert('you trypping you forgot to accept asshole!!');
                    };
                };
            },
            controllerAs: 'review'
        };
    });


})();
