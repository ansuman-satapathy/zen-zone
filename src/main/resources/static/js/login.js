// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    // Validate email address (optional)
    // You can use the same validateEmail function as used in register.js if needed

    // Send fetch request to login endpoint
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            // Login successful
            alert('Login successful');
            // Redirect to dashboard page
            window.location.href = 'dashboard.html';
        } else {
            // Login failed
            alert('Login failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
        alert('An error occurred during login');
    });
});
