angular.module('coffee_book')
  .config($routeProvider => {

    // Find currentUser and set it
    let currentUserObject = (AuthFactory, RootFactory, $http) => new Promise((resolve, reject) => {
      RootFactory.getApiRoot().then(res => {
        $http.get(res.users)
        .then(users => {
          allUsers = users.data
          currentUsername = AuthFactory.getUsername();
          for (var i = 0; i < allUsers.length; i++){
            if (currentUsername === allUsers[i].username) {
              resolve(allUsers[i]);
              AuthFactory.setUserObject(allUsers[i]);
            }
          }
          reject(null);
        })
      })
    })


    // ROUTES
    $routeProvider

      // LANDING
      .when('/', {
        controller: 'LandingCtrl',
        controllerAs: 'landing',
        templateUrl: 'app/landing/landing.html'
      })
      // ABOUT
      .when('/about', {
        controller: 'AboutCtrl',
        controllerAs: 'about',
        templateUrl: 'app/about/about.html'
      })
      // AUTH
      .when('/login', {
        controller: 'AuthCtrl',
        controllerAs: 'auth',
        templateUrl: 'app/auth/auth.html'
      })
      // BREW
      .when('/brew', {
        controller: 'BrewCtrl',
        controllerAs: 'brew',
        templateUrl: 'app/brew/brew.html'
      })
      // COFFEE
      .when('/coffee', {
        controller: 'CoffeeCtrl',
        controllerAs: 'coffee',
        templateUrl: 'app/coffee/coffee.html'
      })
      // COFFEE DETAIL
      .when('/coffee/detail', {
        controller: 'CoffeeDetailCtrl',
        controllerAs: 'coffeeDetail',
        templateUrl: 'app/coffee/coffee-detail.html'
      })
      // PASSPORT
      .when('/passport', {
        controller: 'PassportCtrl',
        controllerAs: 'passport',
        templateUrl: 'app/passport/passport.html'
      })
      // LEARN
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
      .when('/learn-kalita-wave', {
        controller: 'LearnCtrl',
        controllerAs: 'learn',
        templateUrl: 'app/learn/kalita-wave.html'
      })
      .when('/learn-aeropress', {
        controller: 'LearnCtrl',
        controllerAs: 'learn',
        templateUrl: 'app/learn/aeropress.html'
      })

  })
