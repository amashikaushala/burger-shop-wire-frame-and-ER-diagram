//--------------------------Login Page Start  -----------------------
function login() {
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (email === 'ABC@gmail.com' && password === '456') {
        console.log(email , password);
        alert('Login successful!');
        window.location.href = 'homepage.html'; 
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

//--------------------------Login Page End -----------------------
 
 