angular.module('coffee_book')
  .controller('PortalAddCoffeeCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'AuthFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, AuthFactory, API_URL) {
      const addPortal = this;

      // Ctrl variables
      let currentUser;

      // Current User Object
      addPortal.currentUser = AuthFactory.getCurrentUser();




    }
]);
