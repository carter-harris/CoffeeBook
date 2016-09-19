angular.module('coffee_book')
  .controller('LandingCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'AuthFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, AuthFactory, API_URL) {

      console.log("Landing Ctrl");

      const landing = this;

      // landing.username = AuthFactory.getCurrentUser();
      // console.log("landing.username: ", landing.username);

      landing.logout = () => {
         AuthFactory.logout();
         $location.path("/")
       }

    }
]);
