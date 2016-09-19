angular.module('coffee_book')
  .controller('CoffeeDetailCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, API_URL) {

      console.log("Coffee Detail Ctrl");

      // Const for CtrlAs
      const coffeeDetail = this;

      // Variables
      coffeeDetail.title = 'CoffeeDetail Detail Page';
      coffeeDetail.img = '';
      coffeeDetail.brewingRecommendation = '';
      coffeeDetail.ratio = '';
      coffeeDetail.notes = '';



    }
]);
