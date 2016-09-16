angular.module('coffee_book')
  .controller('CoffeeCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, API_URL) {

      console.log("Coffee Ctrl");

      const coffee = this;

      coffee.title = 'Coffee Page'



    }
]);
