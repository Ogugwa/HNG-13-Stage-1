const form= document.querySelector('form');
const nameInput= document.getElementById('name');
const nameError= document.getElementById('name-error');
const emailInput= document.getElementById('email');
const emailError= document.getElementById('email-error');
const emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const subjectInput= document.getElementById('subject');
const subjectError= document.getElementById('subject-error');
const messageInput= document.getElementById('message');
const messageError= document.getElementById('message-error');
const SubmitBtn= document.getElementById('submit-btn');
const successMessage= document.getElementById('success-message');
const errorMessage= document.getElementById('error-message');



// Styling the error messages
nameError.style.color= 'red';
emailError.style.color= 'red';
subjectError.style.color= 'red';
messageError.style.color= 'red';
nameError.style.fontSize= '14px';
emailError.style.fontSize= '14px';
subjectError.style.fontSize= '14px';
messageError.style.fontSize= '14px';

// Styling the success and error message containers
successMessage.style.color= 'green';
successMessage.style.fontSize= '18px';
// errorMessage.style.color= 'red';
// errorMessage.style.fontSize= '16px';

// Success message function
function displaySuccessMessage(){
    successMessage.textContent= "Your message has been sent successfully!";
}

function hideSuccessMessage(){
    successMessage.textContent= "";
}   

// Check function for full name input
function checkName(){    
    if(nameInput.value.trim() === ""){
        nameError.textContent= "Full Name is required.";
        return false;
    }else if(nameInput.value.trim().length < 3){
        nameError.textContent= "Full Name must be at least 3 characters long.";
        return false;
    }else {
        nameError.textContent = "";
        return true;
    }
}
function checkEmail(){    
    if(emailInput.value.trim() === ""){
        emailError.textContent= "Email is required.";
        return false;
    }else if(!emailPattern.test(emailInput.value.trim())){
        emailError.textContent= "Please enter a valid email address.";
        return false;
    }
    emailError.textContent= "";
    return true;
}
function checkSubject(){
    if(subjectInput.value.trim() === ""){
        subjectError.textContent= "Subject is required.";
        return false;
    }else if(subjectInput.value.trim().length < 5){
        subjectError.textContent= "Subject must be at least 5 characters long.";
        return false;
    }
    subjectError.textContent= "";
    return true;
}
function checkMessage(){
    if(messageInput.value.trim() === ""){
        messageError.textContent= "Message is required.";
        return false;
    }else if(messageInput.value.trim().length < 10){
        messageError.textContent= "Message must be at least 10 characters long.";
        return false;
    }
    messageError.textContent= "";
    return true;
}
SubmitBtn.addEventListener('click', function(event){
    event.preventDefault();
    checkName();
    checkEmail();
    checkSubject();
    checkMessage();
    if(checkName() !== false && checkEmail() && checkSubject() && checkMessage()){
        displaySuccessMessage();
        form.reset();
        nameError.textContent= "";
        emailError.textContent= "";
        subjectError.textContent= "";
        messageError.textContent= "";
    }else{
        hideSuccessMessage();
    }
});