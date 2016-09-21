angular.module('coffee_book')
  .controller('NavCtrl', [
    'AuthFactory',
    '$location',

    function(AuthFactory, $location) {

      const nav = this;

      nav.logout = () => {
         AuthFactory.logout();
         $location.path("/");
       }

    }
]);
