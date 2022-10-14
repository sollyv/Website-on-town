//JavaScript for form validation 

//Variables declaration
const form = document.querySelector('#my-form');

const nameInput = document.querySelector('#firstName');
const emailInput = document.querySelector('#email');

const nameError = document.querySelector('#firstName + .field-error');
const emailError = document.querySelector('#email + .field-error');

//Funtions declarations 
//Validate nameInput
function validateName() {
    if(nameInput.validity.valid) {
        // The validity of the value is true, so remove any previous error message
        nameError.textContent='';
    }else {
        // The validity of the value is false, so display an error message
        showNameError();
    }
}

//Display an error message for invalid nameInput
function showNameError() {
    nameError.textContent='Please enter name';
}


function ValidateEmail(event) {

    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.my-form.firstname.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.my-form.firstname.focus();
  
      return false;
  
    }
  
  }

//Validate entire form
function validateForm(event) {
    letformHasErrors=false;

    if(!nameInput.validity.valid) {
        // Name input is invalid, show its error and change "state"
        formHasErrors=true;
        showNameError();
    
    }if(!emailInput.validity.valid) {
        // Email input is invalid, show its error and change "state"
        formHasErrors=true;
        showEmailError();
    }
    // Check the "state" to see if the form should be submitted
    if(formHasErrors) {
        event.preventDefault();
    }
}


//Add eventListener to be able to listen for input and call the validation functions 

nameInput.addEventListener('input', validateName);

// emailInput.addEventListener('input', validateEmail);

form.addEventListener('submit', validateForm);
emailInput.addEventListener('input', ValidateEmail);    