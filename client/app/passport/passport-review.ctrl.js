angular.module('coffee_book')
  .controller('PassportReviewCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'AuthFactory',
    'PassportFactory',
    'API_URL',
    '$routeParams',

    function($http, $location, $timeout, RootFactory, AuthFactory, PassportFactory, API_URL, $routeParams) {

      console.log("Passport Review Ctrl");

      const passportReview = this;

      passportReview.currentUser = AuthFactory.getCurrentUser();
      // console.log("currentUser passport Review ctrl: ", currentUser );

      passportReview.title = 'Passport Review Page'

      // Grab the coffee info of the coffee image clicked in the passport.html
      RootFactory.getApiRoot()
        .then(root => $http.get(`${root.coffee}${$routeParams.coffeeId}/`), console.error)
        .then(
          res => {
            passportReview.coffeeInfo = res.data
            console.log("coffee detail res ", passportReview.coffeeInfo );
          },
          console.error
        )


      passportReview.reviewCoffee = function () {
        console.log("coffe IIIIDDD", $routeParams.coffeeId )
        console.log("user IIIIIDD", passportReview.currentUser.id );
        console.log("review text!", passportReview.review );
        $http({
          url: `${API_URL}/make_coffee_review/`,
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            "review": passportReview.review,
            "user": passportReview.currentUser.id,
            "coffee": $routeParams.coffeeId
          }
        })
        .then(res => {
          $location.path('/passport')
          console.log("res after review post: ", res );
        }).catch(console.error)

      }







    }
]);
