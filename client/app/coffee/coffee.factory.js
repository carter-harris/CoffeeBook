angular.module('coffee_book')
  .factory('CoffeeFactory', [
    "$http",
    "API_URL",
    "AuthFactory",

    ($http, API_URL, AuthFactory) => {

      let apiRoot = $http.get(API_URL);
      let currentUser = AuthFactory.getCurrentUser();

      return {
        // GET ALL THE COFFEES "YOU GET A COFFEE, YOU GET A COFFEE , EVERYBODY GETS A COFFEE" - OPRAH
        getAllCoffees () {
          let getCoffees = $http.get(`${API_URL}/coffee/`)
          return getCoffees.then((res) => {
           console.log("res of get all Coffees in COFFEE FACTORY",res );
           return res.data
          })
        }
      } // end of RETURN

  }])// end of FACTORY
