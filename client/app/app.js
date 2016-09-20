angular.module('coffee_book', ['ngRoute', 'ngCookies'])

  // API URL CONST
  .constant('API_URL', 'http://localhost:8000')

  // On window reload run the read() in authfactory to get the cookie present
  .run(AuthFactory => {
    AuthFactory.read();
  })

  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyDaiNWfRZThMhPjIZPZ_yw9kav85LoVpK8",
    authDomain: "bed-capstone.firebaseapp.com",
    databaseURL: "https://bed-capstone.firebaseio.com",
    storageBucket: "bed-capstone.appspot.com",
    messagingSenderId: "247521444832"
  })
