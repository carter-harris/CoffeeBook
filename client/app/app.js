angular.module('coffee_book', ['ngRoute', 'ngCookies'])
  // API URL CONST
  .constant('API_URL', 'http://localhost:8000')
  // On window reload run the read() in authfactory to get the cookie present
  .run(AuthFactory => {
    AuthFactory.read();
  })
