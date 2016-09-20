angular.module('coffee_book')
  .factory('PortalFactory', [
    "$http",
    "API_URL",
    "AuthFactory",

    ($http, API_URL, AuthFactory) => {

      let apiRoot = $http.get(API_URL);
      let userCredentials = null;
      let currentUser = AuthFactory.getCurrentUser();

      return {
        // GET THE CURRENT USERS COFFEES
        getUserCoffees () {
          let getCoffees = $http.get(`${API_URL}/coffee/?user_id=${currentUser.id}`)
          return getCoffees.then((res) => {
           console.log("res of get user Coffees",res );
           return res.data
          })
        },
        getAllCoffees () {
          let getCoffees = $http.get(`${API_URL}/coffee/`)
          return getCoffees.then((res) => {
           console.log("res of get all Coffees",res );
           return res.data
          })
        }
      } // end of RETURN

    } // end of FACTORY
  ])
