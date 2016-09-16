angular.module('coffee_book')
  .config($routeProvider => {
    $routeProvider
      .when('/login', {
        controller: 'AuthCtrl',
        controllerAs: 'auth',
        templateUrl: 'app/auth/auth.html'
      });
  })
