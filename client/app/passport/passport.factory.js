angular.module('coffee_book')
  .factory('PassportFactory', [
    "$http",
    "API_URL",
    "AuthFactory",
    "PortalFactory",

    ($http, API_URL, AuthFactory, PortalFactory) => {

      let apiRoot = $http.get(API_URL);
      let currentUser = AuthFactory.getCurrentUser();

      return {
        // GET THE CURRENT USERS REVIEWS
        getUserReviews () {
          let getCoffees = $http.get(`${API_URL}/review/?user_id=${currentUser.id}`)
          return getCoffees.then((res) => {
           // console.log("res of get user Coffees PassportFactory",res );
           return res.data
          })
        }

      } // end of RETURN

    } // end of FACTORY
  ])
