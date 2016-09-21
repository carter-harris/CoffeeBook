angular.module('coffee_book')
  .controller('PassportCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'PassportFactory',
    'AuthFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, PassportFactory, AuthFactory, API_URL) {

      console.log("Passport Ctrl");

      const passport = this;

      passport.currentUser = AuthFactory.getCurrentUser();

      passport.allCoffees = {}

      passport.title = 'Passport Page'

      PassportFactory.getUserReviews()
        .then(res => {
          // console.log("res of passport ctrl ", res );
          passport.allCoffees = res;


        })

        //
        // post to update review section, with the owner and coffee id
        //

    }
]);
