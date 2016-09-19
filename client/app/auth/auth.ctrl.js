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


      auth.register = function() {
        $http({
          url: `${API_URL}/register/`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: auth.user // auth.user has all the properties of the form
        }).then(res => {
            console.log("res from posting the user register!!!!!", res );
            auth.login()
        }, (e) => {console.log('the e!', e )}).catch(console.error);
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
            "username": auth.user.username,
            "password": auth.user.password
          }
        }).then(res => {
          console.log("res after login!", res );
          if (res.authenticated_user === 'None') {
            console.log("Login FAILED");
          }
          else {
            console.log('Success, you logged in! RES: ', res.data)
            /*
            Login was successful, store credentials for use in requests
            to API that require permissions
             */
            RootFactory.credentials({
              username: auth.user.username,
              password: auth.user.password
            });
            RootFactory.username = auth.user.username
            // Redirect on successful login
            $location.path('/landing');
          }
        }).catch(console.error);
      };

    }
]);