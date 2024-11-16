// Login Form Handling
document.getElementById("login-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Validate the inputs
    if (!username || !password) {
        errorMessage.textContent = "Please fill out username and password.";
        return;
    }

    // Handle login process (validation with server)
    authenticateUser(username, password);
});

// Show/hide password functionality
document.getElementById("show-pass").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

// Authenticate user with the server
function authenticateUser(username, password) {
    // Example using fetch API to send login details to a server-side script (e.g., PHP)
    fetch("login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = "dashboard.html";  // Redirect to Dashboard if login is successful
        } else {
            document.getElementById("error-message").textContent = "Invalid Username or Password!";
        }
    })
    .catch(error => {
        console.error("Error during login:", error);
        document.getElementById("error-message").textContent = "An error occurred. Please try again.";
    });
}

// Order Form Handling
document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const deliveryTime = document.getElementById('deliveryTime').value;

    // Validate the inputs
    if (!name || !address || !contact || !quantity || !deliveryDate || !deliveryTime) {
        alert('Please fill in all the fields.');
        return;
    }

    // Prepare data to be saved in the database (here we're just logging it)
    const orderData = {
        name: name,
        address: address,
        contact: contact,
        quantity: quantity,
        deliveryDate: deliveryDate,
        deliveryTime: deliveryTime
    };

    console.log('Order Created:', orderData);

    // You can send this data to your server for saving (using AJAX or fetch)
    // Example: fetch('order-api.php', { method: 'POST', body: JSON.stringify(orderData) });

    // Clear form after submission
    document.getElementById('orderForm').reset();
    alert('Order created successfully!');
});
