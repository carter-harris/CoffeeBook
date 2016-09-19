angular.module('coffee_book')
  .config($routeProvider => {

    // If credentials are set then allow the user to go to restricted pages
    // if not, direct them to the login
    let requiresAuth = ($location, AuthFactory) => new Promise((resolve, reject) => {
      if (AuthFactory.credentials()) {
        console.log("User is authenticated, resolve route promise");
        resolve();
      } else {
        console.log("User is not authenticated, reject route promise");
        reject();
        $location.path("/login");
      }
    });


    // Find currentUser and et it
    let currentUserObject = (AuthFactory, RootFactory, $http) => new Promise((resolve, reject) => {
      RootFactory.getApiRoot().then(res => {
        console.log("res of config currentUserObject: ", res );
        $http.get(res.users)
        .then(users => {
          all_users = users.data
          currentUsername = AuthFactory.getUsername();
          console.log("currentUsername config file: ", currentUsername );
          for (var i = 0; i < all_users.length; i++){
            if (currentUsername === all_users[i].username) {
              resolve(all_users[i]);
              AuthFactory.setCurrentUser(all_users[i]);
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
        templateUrl: 'app/passport/passport.html',
        resolve: { requiresAuth, currentUserObject }
      })
      // COMPANY PORTAL
      .when('/portal', {
        controller: 'PortalCtrl',
        controllerAs: 'portal',
        templateUrl: 'app/portal/portal.html',
        resolve: { requiresAuth, currentUserObject }
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
