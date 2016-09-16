angular.module('coffee_book')
  .controller('PassportCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, API_URL) {

      console.log("Passport Ctrl");

      const passport = this;

      passport.title = 'Passport Page'



    }
]);
