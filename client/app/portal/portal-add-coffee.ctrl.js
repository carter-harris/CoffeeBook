angular.module('coffee_book')
  .controller('PortalAddCoffeeCtrl', [
    '$http',
    '$location',
    '$timeout',
    'RootFactory',
    'AuthFactory',
    'API_URL',

    function($http, $location, $timeout, RootFactory, AuthFactory, API_URL) {
      // CONST CtrlAs
      const addPortal = this;

      // CTRL VARIABLES
      let currentUser;

      // CURRENT USER OBJECT
      addPortal.currentUser = AuthFactory.getCurrentUser();

      // ADD COFFEE
      addPortal.addCoffee = function (file) {
        const input = document.querySelector('[type="file"]');
        const imageFile = input.files[0];
        const randomInteger = Math.random() * 1e17;
        const getFileExtension = imageFile.type.split('/').slice(-1)[0];
        const randomPath = `${randomInteger}.${getFileExtension}`;

        firebase.storage().ref('/images').child(randomPath).put(imageFile)
          .then(res => {
            console.log("firebase res: ", res )
            $http({
              url: `${API_URL}/add_new_coffee/`,
              method: "POST",
              headers: {"Content-type": "application/x-www-form-encoded"},
              data: {
                "name": addPortal.name,
                "farm": addPortal.farm,
                "varietal": addPortal.varietal,
                "altitude": addPortal.altitude,
                "process": addPortal.process,
                "notes": addPortal.notes,
                "region": addPortal.region,
                "brewMethod": addPortal.brewMethod,
                "description": addPortal.description,
                "owner": addPortal.currentUser.id,
                "image": res.downloadURL
              }
            }).then((res) => {
                console.log("ADD COFFEE SUCESS! api new coffee post res: ", res );
                $location.path("/portal/view")
            })
          }) // end of FIREBASE RES





      } // end of ADD COFFEE

    } // end of CTRL FUNCTION
]);



