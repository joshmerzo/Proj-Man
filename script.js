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

    // Clear form after submission
    document.getElementById('orderForm').reset();
    alert('Order created successfully!');
});
