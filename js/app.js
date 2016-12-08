(function() {
    // declaring a angular module
    var app = angular.module('store', []);

    // create controller for store module
    app.controller('StoreController', function() {
        this.products = [
        {
            name: 'gem stone',
            price: 2.86,
            description: 'this is a way better description of this gem then what was there before',
            forSale: true,
            soldOut: false,
            images: [{
                full: 'images/gem.gif'
            }],
            reviews: [{
                stars: 5,
                body: 'i love this gem sooo much',
                author: 'collin@mgial.com'
            }]
        }, {
            name: 'gem stone',
            price: 100,
            description: 'this is my favorite gem it is the most amazing omg i love this gem',
            forSale: true,
            soldOut: false,
            images: [{
                full: 'images/gem2.gif'
            }],
            reviews: [{
                stars: 3,
                body: 'i love this gem too',
                author: 'collin@mgial.com'
            }]
        }];
    });

    // creating 
    app.controller('PanelController', function() {
        this.tab = 1;
        // panelcontroller method
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        // another panelcontroller method
        this.isSelected = function(selectTab) {
            return this.tab === selectTab;
        };
    });

})();
