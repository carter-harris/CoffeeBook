angular.module('coffee_book')
  .factory( "AuthFactory", [
    '$cookies',
    '$location',
    'RootFactory',

    function($cookies, $location, RootFactory) {

    let userCredentials = null;
    let currentUsername;
    let currentUserObject = null;


    return {
      // PASS IN CREDS AND ENCODE THEM
      credentials (creds) {
        if (creds) {
          // endcode the user
          userCredentials = window.btoa(`${creds.username}:${creds.password}`);
          $cookies.put('userCreds', userCredentials);
        } else {
          return userCredentials;
        }
      },
      // LOGOUT USER
      logout: () => {
        userCredentials = null;
        console.log('Logout');
        $cookies.remove('userCreds');
        $location.path('/');
      },
      // READ USER CREDS
      read () {
        return userCredentials = $cookies.get('userCreds');
      },
      // UPDATE USER CREDS
      update (creds) {
        userCredentials = creds;
      },
      // GET THE USERNAME FROM THE ENCODED CREDS
      getUsername () {
        let creds = window.atob(userCredentials).split(":");
        return creds[0]
      },
      //  SET CURRENT USER , ARG IS PASSED FROM app.config.js from the cookie set
      setCurrentUser (currentUser) {
        currentUserObject = currentUser
        console.log("currentUserObject: ", currentUserObject);
      },
      // GET THE CURRENT USER FROM THE COOKIE SETTER IN app.config.js
      getCurrentUser () { // this . whatever attribute
        return currentUserObject;
      }
    }
  }]);
