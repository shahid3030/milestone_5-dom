// Step no 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // Step-2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step 3 : Set password 
    // 3 a : set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // Damger : Do not verify email password on the client site
    // step-4: verify email and Password 
    if(email ==='sontan@baap.com' && password ==='secret'){
        window.location.href = 'bank.html';

    }
    else{
        alert('Toke ami teijjo sontan ghosona korlam')
    }
})