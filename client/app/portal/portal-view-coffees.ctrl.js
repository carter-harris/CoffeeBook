angular.module('coffee_book')
  .controller('PortalViewCoffeesCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'AuthFactory',
    'PortalFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, AuthFactory, PortalFactory, API_URL) {
      const viewPortal = this;

      // CTRL VARIABLES
      viewPortal.currentUser = AuthFactory.getCurrentUser();
      // console.log("currentUser portal ctrl: ", currentUser);

      PortalFactory.getUserCoffees ()
        .then((res) => {
          // console.log("users coffees res:", res);
          viewPortal.userCoffees = res;
          $timeout();
        })



    }
]);
