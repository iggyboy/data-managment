var config = {
    apiKey: "AIzaSyB4Ws5gPo9gNW9x90uXnX6XZ4uqE5QjkUY",
    authDomain: "countdownclicker.firebaseapp.com",
    databaseURL: "https://countdownclicker.firebaseio.com",
    storageBucket: "countdownclicker.appspot.com",
    messagingSenderId: "435604262542"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();

  $(".btn").on("click", function(){
      let name = $("#name-input").val();
      let role = $("#role-input").val();
      let date = $("#date-input");
      let rate = $("#rate-input");

      database.ref().push({
          name: name,
          role: role,
          date: date,
          rate: rate
      }, function(errorObject){
          console.log(errorObject.code);
      });

      console.log("here")
  });