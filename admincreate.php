<?php
$servername = "localhost";
$username = "root";
$password = "merzo";  // Your MySQL password
$dbname = "water_delivery_system";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// The username and password you want to store (replace with actual values)
$username = "admin";
$password = "adminpassword";  // Your password

// Hash the password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insert the admin record into the database
$sql = "INSERT INTO admin (username, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $hashed_password);
$stmt->execute();

echo "Admin user created successfully!";
$stmt->close();
$conn->close();
?>
