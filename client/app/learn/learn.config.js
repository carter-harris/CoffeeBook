angular.module('coffee_book')
  .config($routeProvider => {
    $routeProvider
      .when('/learn', {
        controller: 'LearnCtrl',
        controllerAs: 'learn',
        templateUrl: 'app/learn/learn.html'
      });
  })
