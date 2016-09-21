angular.module('coffee_book')
  .controller('PortalCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'AuthFactory',
    'PortalFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, AuthFactory, PortalFactory, API_URL) {

      // console.log("Landing Ctrl");

      const portal = this;
      portal.currentUser = {} // there will be an object in this

      portal.currentUser = AuthFactory.getCurrentUser();
      // console.log("portal.currentUser", portal.currentUser );

      PortalFactory.getUserCoffees ()
        .then((res) => {
          // console.log("users coffees res:", res);
          portal.userCoffees = res;
          $timeout();
        })


    }
]);