const form = document.querySelector("form");
const fullNameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit-btn");

// Targeting all the error message elements
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");

// Setting the email pattern for validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Validation and Submission
// Check each input validity on entering data
function validateForm() {
    let isValid = true;
    if(fullNameInput.value.trim() === "" ) {
        nameError.textContent = "Please enter your full name.";
        nameError.style.color = "red";
        isValid = false;
    } 
    if(emailInput.value.trim() === "" ) {
        emailError.textContent = "Please enter your email address.";
        emailError.style.color = "red";
        isValid = false;
    } 
    if(messageInput.value.trim() === "" || messageInput.value.trim().length < 10 ) {
        messageError.textContent = "Please enter a message with at least 10 characters.";
        messageError.style.color = "red";
        isValid = false;
    } 
    if (nameError.textContent === "" && emailError.textContent === "" && subjectError.textContent === "" && messageError.textContent === "") {
        error.textContent = "";
    }
}

form.addEventListener("input",validateForm); 
const successMessage = document.getElementById("success-message");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateForm()) {
    successMessage.textContent = "Form submitted successfully";
    form.reset();
  }
  
});