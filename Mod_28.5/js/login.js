document.getElementById('btn-login').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email === 'sontan@baap.com' && password ==='secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('please enter valid email or password');
    }
})
