angular.module('coffee_book')
  .controller('AboutCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, API_URL) {

      console.log("About Ctrl");

      const about = this;

      about.title = 'About Page'



    }
]);
