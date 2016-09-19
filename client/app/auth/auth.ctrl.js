angular.module('coffee_book')
  .controller('AuthCtrl', [
    '$http',
    '$location',
    'RootFactory',
    'AuthFactory',
    'API_URL',
    '$cookies',

    function($http, $location, RootFactory, AuthFactory, API_URL, $cookies) {
      const auth = this;

      // Default values variables for user object
      auth.user = {
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        user_type: '',
        shop_name: '',
        location: ''
      };

      auth.root = null;
      auth.currentUserDude = null;


      // Post the user-provided inputs to API then run login()
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


      // Post the user-provided credentials to API
      auth.login = function() {
        $http({
          url: `${API_URL}/login/`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: {
            "username": auth.user.username,
            "password": auth.user.password
          }
        }).then(res => {
          if (res.authenticated_user === 'None') {
            console.log("Login Failed.");
          }
          else {
            console.log('Success, you logged in! RES: ', res.data[0].fields)

            // auth.currentUser = res.data[0].fields

            // Login was successful, store credentials for use in requests
            // to API that require permissions
            AuthFactory.credentials({
              username: auth.user.username,
              password: auth.user.password
            });
            // Redirect on successful login
            $location.path('/');
          }
        }).catch(console.error);
      };

    }
]);