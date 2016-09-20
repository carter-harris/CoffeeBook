angular.module('coffee_book')
  .controller('CoffeeDetailCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, API_URL) {

      // Const for CtrlAs
      const coffeeDetail = this;

      // Variables
      coffeeDetail.title = 'CoffeeDetail Detail Page';




    }
]);
