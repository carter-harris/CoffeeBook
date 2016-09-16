angular.module('coffee_book')
  .controller('LearnCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, API_URL) {

      console.log("Learn Ctrl");

      const learn = this;

      learn.title = 'Learn Page'



    }
]);
