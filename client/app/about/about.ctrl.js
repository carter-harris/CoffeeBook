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

      about.title = 'About'
      about.story = 'A cool story about coffee and all the coffee things of brewing and roasting bc people just brew coffe anyway and roasters have recommendations that make it super good and peole should use that instead right? yes correct, make coffee making great again.'



    }
]);
