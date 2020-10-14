var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var mybutton = document.getElementById("button");
var errors = 0;

function validate(userInput,errorIcon,errorText) {
  if (userInput.value === '' || userInput.value === ' ') {
    userInput.style.border = "3px solid #FF7A7A";
    errorIcon.style.display = "inline";
    errorText.style.display = "block";
    errors += 1;
  } else {
    userInput.style.border = "1px solid #B9B6D3";
    errorIcon.style.display = "none";
    errorText.style.display = "none";
  }
}

function validateFname() {
  let errorIcon = document.getElementById("fname-icon-error");
  let errorText = document.getElementById("fname-error");
  validate(fname, errorIcon, errorText);
}

function validateLname() {
  let errorIcon = document.getElementById("lname-icon-error");
  let errorText = document.getElementById("lname-error");
  validate(lname, errorIcon, errorText);
}

function validateEmail() {
  let errorIcon = document.getElementById("email-icon-error");
  let errorText = document.getElementById("email-error");
  if(!email.value.includes('@') || !email.value.includes('.com') || email.value === '' || email.value === ' '){
        email.style.border = '3px solid #FF7A7A';
        errorIcon.style.display = 'inline';
        errorText.style.display = 'block';
        errors += 1;
    }
    else{
        email.style.border = '1px solid #B9B6D3';
        errorIcon.style.display = 'none';
        errorText.style.display = 'none';
    }
}

function validatePassword() {
  let errorIcon = document.getElementById("password-icon-error");
  let errorText = document.getElementById("password-error");
  validate(password, errorIcon, errorText);
}

mybutton.onclick = function() {
   validateFname();
   validateLname();
   validateEmail();
   validatePassword();

   if(errors === 0) {
       fname.value = '';
       lname.value = '';
       email.value = '';
       password.value = '';
       alert('Thank you! Registration Completed');
   }
   errors = 0;
}
