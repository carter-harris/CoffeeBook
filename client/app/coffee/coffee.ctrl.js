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
      // coffee.currentUser = RootFactory.getCurrentUser().username;
      // coffee.currentUserType = RootFactory.getCurrentUser().user_type;

      CoffeeFactory.getUserCoffees ()
        .then((res) => {
          console.log("users coffees res:", res);
          portal.userCoffees = res;
          $timeout();
        })

    }
]);
