angular.module('coffee_book', ['ngRoute', 'ngCookies'])
  // API URL CONST
  .constant('API_URL', 'http://localhost:8000')
  .run(AuthFactory => {
    AuthFactory.read();
  })

  let requiresAuth = ($location, AuthFactory) => new Promise((resolve, reject) => {
    if (AuthFactory.credentials()) {
      console.log("User is authenticated, resolve route promise");
      resolve();
    } else {
      console.log("User is not authenticated, reject route promise");
      reject();
      $location.path("/");
    }
  });

// resolve: { requiresAuth }