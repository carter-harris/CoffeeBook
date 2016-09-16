angular.module('coffee_book')
  .config($routeProvider => {
    $routeProvider
      .when('/about', {
        controller: 'AboutCtrl',
        controllerAs: 'about',
        templateUrl: 'app/about/about.html'
      });
  })
