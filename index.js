
var config = {
  apiKey: "AIzaSyB7GyXDFZNrg-LGUGIE6RyXwHmvtB3ipoQ",
  authDomain: "mhacksproject.firebaseapp.com",
  databaseURL: "https://mhacksproject.firebaseio.com",
  projectId: "mhacksproject",
  storageBucket: "mhacksproject.appspot.com",
  messagingSenderId: "294027637255"
};
firebase.initializeApp(config);


function login(){
    var Logemail = document.getElementById("loginEmail").value;
    var Logpassword = document.getElementById("loginPass").value;
}



function signup(){
  var Signfirst = document.getElementById("signupFNAME").value;
    var Signlast = document.getElementById("signupLNAME").value;
    var Signemail = document.getElementById("signupEmail").value;
    var Signpassword = document.getElementById("SignupPass").value;
if (Signfirst = "" || Signlast = "" || Signemail = "" || Signpassword = ""){
  document.getElementById("fillout").innerHTML = "Please fill out all the fields."
}

else {
  return
}
}
