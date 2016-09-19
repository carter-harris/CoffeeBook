angular.module('coffee_book')
  .controller('NavCtrl', [
    'AuthFactory',
    '$http',
    '$location',

    function(AuthFactory, $http, $location) {

      console.log("Nav Ctrl");

      const nav = this;

      // nav.username = AuthFactory.getUsername();
      // nav.username = AuthFactory.getDecodedCredentials();

      nav.logout = () => {
         AuthFactory.logout();
         $location.path("/");
       }


       // if (nav.username.length === 0 || nav.username === undefined) {
       //   $location.path("/");
       // } else {
       //   $scope.$emit("username", nav.username);
       // }

    }
]);
