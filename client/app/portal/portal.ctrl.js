angular.module('coffee_book')
  .controller('PortalCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'AuthFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, AuthFactory, API_URL) {

      // console.log("Landing Ctrl");

      const portal = this;

      let currentUser;

      portal.currentUser = AuthFactory.getCurrentUser();
      console.log("currentUser portal ctrl: ", currentUser);



    }
]);