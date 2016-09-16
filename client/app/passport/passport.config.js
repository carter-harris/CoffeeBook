angular.module('coffee_book')
  .config($routeProvider => {
    $routeProvider
      .when('/passport', {
        controller: 'PassportCtrl',
        controllerAs: 'passport',
        templateUrl: 'app/passport/passport.html'
      });
  })
