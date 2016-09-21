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



      //  make a call to reviews and find match of user and coffee id
      RootFactory.getApiRoot()
        .then(root => {
          return $http.get(`${root.review}`)
          console.log("REVIEW CALL callback ROOT 1", root )
        })
        .then(res => {
          console.log("REVIEW CALL callback RES 1", res)
          for (var i = 0; i < res.data.length; i++) {
            // console.log("00000000",passportReview.currentUser.id === res.data[i].owner.id );
            // console.log("111111111",$routeParams.coffeeId, res.data[i].coffee.id );
            if (passportReview.currentUser.id === res.data[i].owner.id && parseInt($routeParams.coffeeId) === res.data[i].coffee.id) {
            passportReview.review = res.data[i].review
            console.log("REVIEW DAWG!", passportReview.review );
            }
          }
        }).catch(console.error)



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
        }).catch(console.error)

      }







    }
]);
