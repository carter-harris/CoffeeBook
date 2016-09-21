angular.module('coffee_book')
  .controller('CoffeeCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'CoffeeFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, CoffeeFactory, API_URL) {

      const coffee = this;

      coffee.title = 'Coffee Page'
      coffee.latinAmerica = []
      coffee.africa = []
      coffee.oceania = []


      CoffeeFactory.getAllCoffees ()
        .then((res) => {
          // console.log("all coffees res COFFEE CTRL:", res);

          // New Arrays based off region
          coffee.latinAmerica = res.filter(latin => (latin.region==="Latin America"))
          coffee.africa = res.filter(africa => (africa.region==="Africa"))
          coffee.oceania = res.filter(oeania => (oeania.region==="Oceania"))

          $timeout();
        })

    }
]);
