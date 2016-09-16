angular.module('coffee_book')
  .config($routeProvider => {
    $routeProvider
      .when('/landing', {
        controller: 'LandingCtrl',
        controllerAs: 'landing',
        templateUrl: 'app/landing/landing.html'
      });
  })
