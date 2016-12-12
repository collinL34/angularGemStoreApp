(function() {
    // declaring a angular module
    var app = angular.module('store', ['$http','store-products']);

    // create controller for store module
    app.controller('StoreController', ['$http',function($http) {
        var store = this;

        store.products = [];

        $http.get('/products.json').success( function(data) {
            store.products = data;
            console.log(data);
        });
    }]);
})();