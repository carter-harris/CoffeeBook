angular.module('coffee_book')
  .config($routeProvider => {
    $routeProvider
      .when('/learn', {
        controller: 'LearnCtrl',
        controllerAs: 'learn',
        templateUrl: 'app/learn/learn.html'
      })
      .when('/learn-chemex', {
        controller: 'LearnCtrl',
        controllerAs: 'learn',
        templateUrl: 'app/learn/chemex.html'
      })
      .when('/learn-kalita_wave', {
        controller: 'LearnCtrl',
        controllerAs: 'learn',
        templateUrl: 'app/learn/kalita_wave.html'
      })
      .when('/learn-chemex', {
        controller: 'LearnCtrl',
        controllerAs: 'learn',
        templateUrl: 'app/learn/aeropress.html'
      })
      ;
  })
