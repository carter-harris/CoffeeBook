angular.module('coffee_book')
  .controller('PortalCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'AuthFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, AuthFactory, API_URL) {

      console.log("Landing Ctrl");

      const portal = this;

      let currentUser;

      portal.currentUser = AuthFactory.getCurrentUser();
      console.log("currentUser portal ctrl: ", currentUser);

      portal.postCoffee = function() {
        $http({
          url:`${API_URL}/coffee/{owner=portal.currentUser.id}`,

          // build userpk equals owner, send current users pk
          after decode and make variables , make a owner = User.objecst ['data']['owner']
        })
      }

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