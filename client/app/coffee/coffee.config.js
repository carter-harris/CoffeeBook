angular.module('coffee_book')
  .config($routeProvider => {
    $routeProvider
      .when('/coffee', {
        controller: 'CoffeeCtrl',
        controllerAs: 'coffee',
        templateUrl: 'app/coffee/coffee.html'
      })
      .when('/coffee/detail', {
        controller: 'CoffeeDetailCtrl',
        controllerAs: 'coffeeDetail',
        templateUrl: 'app/coffee/coffee-detail.html'
      });
  })
