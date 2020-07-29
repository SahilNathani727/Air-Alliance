/*   Signup  */
function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

// firebase setup for signup


var signupSubmitButton=document.getElementById("signup-submit");

signupSubmitButton.addEventListener('click',signUpClicked);



function signUpClicked(){
var name=document.getElementById("user-name").value;
var email=document.getElementById("user-email").value;
var password=document.getElementById("user-pass").value;

console.log(email+" "+password);

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
 // Handle Errors here.
 var errorCode = error.code;
 var errorMessage = error.message;
 alert(errorMessage);
});

alert("user Added");

}


var signinSubmitButton=document.getElementById("signin-submit");

signinSubmitButton.addEventListener('click',signInClicked);

function signInClicked(){

  var email=document.getElementById("inputEmail").value;
  var password=document.getElementById("inputPassword").value;
  var signin=true;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  return signin ;
});

alert("user Authorized");
}
