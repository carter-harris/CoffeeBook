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

      let username = AuthFactory.getCurrentUser();
      console.log("landing ctrl username: ", username);

      landing.logout = () => {
         AuthFactory.logout();
         $location.path("/")
       }

    }
]);
