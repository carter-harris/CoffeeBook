angular.module('coffee_book')
  .controller('PortalViewCoffeesCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'AuthFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, AuthFactory, API_URL) {
      const viewPortal = this;

      // Ctrl variables
      let currentUser;

      // Current User Object
      viewPortal.currentUser = AuthFactory.getCurrentUser();



    }
]);
