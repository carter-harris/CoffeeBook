angular.module('coffee_book', ['ngRoute'])

// API URL
.constant('API_URL', 'http://localhost:8000')


// GETS THE API ROOT INFORMATION
.factory('RootFactory', [
    "$http",
    "$timeout",
    "API_URL",

    ($http, $timeout, API_URL) => {
      let apiRoot = null;
      let httpGet = $http.get(API_URL);
      let userCredentials = {};

      return {
        getApiRoot () {
          return httpGet.then(res => res.data)
        },
        credentials (creds) {
          if (creds) {
            userCredentials = creds;
          } else {
            if (userCredentials.hasOwnProperty("password")) {
              return window.btoa(`${userCredentials.username}:${userCredentials.password}`);
            } else {
              return false;
            }
          }
        }
      }
    }
  ])



//// ----  FILTERS  ---- /////

// CAPITALIZE FIRST LETTER OF A STRING
.filter('capitalize', () => {
  return (thingToChange) => {
    return thingToChange.charAt(0).toUpperCase() + thingToChange.slice(1)
  }
});
