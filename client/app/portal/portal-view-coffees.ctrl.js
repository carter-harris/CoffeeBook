angular.module('coffee_book')
  .controller('PortalCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'AuthFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, AuthFactory, API_URL) {
      const portal = this;

      // Ctrl variables
      let currentUser;

      // Current User Object
      portal.currentUser = AuthFactory.getCurrentUser();

      auth.register = function() {
        $http({
          url: `${API_URL}/register/`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          // auth.user has all the properties from the form
          data: auth.user
        }).then(res => {
            console.log("res from posting the user register!!!!!", res );
            // Now run login with the username and password
            auth.login()
        }, (e) => {console.log('the e!', e )}).catch(console.error);
      };


    }
]);