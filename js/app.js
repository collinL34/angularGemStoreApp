(function() {
  // declaring a angular module
    var app = angular.module('store', []);

    // create controller for store module
    app.controller('StoreController', function() {
        this.products = gems;
    });

    // declaring gems nested objects within array
    var gems = [{
        name: 'gem stone',
        price: 2.86,
        description: 'this is a way better description of this gem thne what was there before',
        forSale: true,
        soldOut: false,
        images: [
        {
          full: 'gem.gif'
        }]
    }, {
        name: 'gem stone',
        price: 100,
        description: 'this is my favorite gem it is the most amazing omg i love this gem',
        forSale: true,
        soldOut: false,
        images: [
        {
          full: 'gem2.gif'
        }]
    }];

    // creating 
    app.controller('PanelController',function() {
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
