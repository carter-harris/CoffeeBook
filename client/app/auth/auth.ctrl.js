angular.module('coffee_book')
  .controller('AuthCtrl', [
    '$http',
    '$location',
    'RootFactory',
    'API_URL',

    function($http, $location, RootFactory, API_URL) {

      console.log("runnin? auth" );

      const auth = this;

      // Default values variables
      // auth.user = {
      //   username: '',
      //   password: ''
      // };
      auth.root = null;


      auth.register = function() {
        $http({
          url: `${API_URL}/register/`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: auth // auth.user has all the properties of the form
        }).success(res => {
          if (res.success) {
            console.log("Registered");
            $location.path('/landing');
          }
        }).catch(console.error);
      };

      /*
        Post the user-provided credentials to API
       */
      auth.login = function() {
        $http({
          url: `${API_URL}/login/`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: {
            "username": auth.username,
            "password": auth.password
          }
        }).then(res => {
          if (res.authenticated_user === 'None') {
            console.log("Login FAILED");
          }
          else {
            console.log('Success, you logged in! RES: ', res.authenticated_user)
            /*
            Login was successful, store credentials for use in requests
            to API that require permissions
             */
            RootFactory.credentials({
              username: auth.username,
              password: auth.password
            });

            // Redirect on successful login
            $location.path('/landing');
          }
        }).catch(console.error);
      };

    }
]);