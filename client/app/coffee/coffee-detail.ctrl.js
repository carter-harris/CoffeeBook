angular.module('coffee_book')
  .controller('CoffeeDetailCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'API_URL',
    '$routeParams',

    function($http, $location, $timeout, RootFactory, API_URL, $routeParams) {

      // CONST FOR CtrlAs
      const coffeeDetail = this;

      // VARIABLES
      coffeeDetail.title = 'CoffeeDetail Detail Page';

      // GET COFFEE DETAIL
      RootFactory.getApiRoot()
        .then(root => $http.get(`${root.coffee}${$routeParams.coffeeId}/`), console.error)
        .then(
          res => {
            coffeeDetail.coffeeInfo = res.data
            // console.log("coffee detail res ", coffeeDetail.coffeeInfo );
          },
          console.error
        )


    }
]);
