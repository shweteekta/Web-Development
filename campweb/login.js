
$(document).ready(function(){
    $(".login-form").hide();
$(".login").css("background", "none");

$(".login").click(function(){
  $(".signup-form").hide();
  $(".login-form").show();
  $(".signup").css("background", "none");
  $(".login").css("background", "#fff");
});

$(".signup").click(function(){
  $(".signup-form").show();
  $(".login-form").hide();
  $(".login").css("background", "none");
  $(".signup").css("background", "#fff");
});

$(".btn").click(function(){
  $(".input").val("");
});})
var firebaseConfig = {
    apiKey: "AIzaSyBLzNuhhRZEe8b8sCtU14SUPBEYdrpm7Ac",
    authDomain: "weblogin-99b57.firebaseapp.com",
    databaseURL: "https://weblogin-99b57.firebaseio.com",
    projectId: "weblogin-99b57",
    storageBucket: "weblogin-99b57.appspot.com",
    messagingSenderId: "951150663114",
    appId: "1:951150663114:web:326948cc91c9f131a02b33"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  
  function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Created Account Successfully, Now login");
  }
  
  
  
  function signIn(){
    
    var email = document.getElementById("email1");
    var password = document.getElementById("password1");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Logged in Successfully")
    
    
  }
  
  
  function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
  }
  
  
  
  

