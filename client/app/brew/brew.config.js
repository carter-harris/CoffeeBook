angular.module('coffee_book')
  .config($routeProvider => {
    $routeProvider
      .when('/brew', {
        controller: 'BrewCtrl',
        controllerAs: 'brew',
        templateUrl: 'app/brew/brew.html'
      });
  })
