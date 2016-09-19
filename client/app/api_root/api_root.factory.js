angular.module('coffee_book')
  .factory('RootFactory', [
    "$http",
    "API_URL",

    ($http, API_URL) => {

      let apiRoot = $http.get(API_URL);
      let userCredentials = null;

      return {
        getApiRoot () {
          return apiRoot.then(res => res.data)
        }
      }
    }
  ])
