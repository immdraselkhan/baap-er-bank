document.getElementById('user-email').addEventListener('click', function(){
    document.getElementById('user-email').value = 'rasel@baap-er-bank.com';
})

document.getElementById('user-password').addEventListener('click', function(){
    document.getElementById('user-password').value = 'Password';
})

document.getElementById('login-btn').addEventListener('click', function(){
    if(document.getElementById('user-email').value === 'rasel@baap-er-bank.com' && document.getElementById('user-password').value === 'Password') {
        window.location.href = 'dashboard.html';
    }
    else {
        alert('You enterted wrong email or password')
    }
})