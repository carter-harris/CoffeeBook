angular.module('coffee_book')
  .config($routeProvider => {
    $routeProvider
      .when('/coffee', {
        controller: 'CoffeeCtrl',
        controllerAs: 'coffee',
        templateUrl: 'app/coffee/coffee.html'
      })
      .when('/coffee', {
        controller: 'CoffeeCtrl',
        controllerAs: 'coffee',
        templateUrl: 'app/coffee/coffee.html'
      });
  })
