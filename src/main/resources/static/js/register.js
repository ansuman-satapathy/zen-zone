// register.js

// Function to validate email address
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    // Validate email address
    if (!validateEmail(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Send fetch request to register endpoint
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            // Registration successful
            alert('Registration successful');
            // Redirect to login page
            window.location.href = 'login.html';
        } else {
            // Registration failed
            alert('Registration failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
        alert('An error occurred during registration');
    });
});
