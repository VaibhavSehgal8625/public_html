function openRazorpayCheckout(event, buttonElement) {
    event.preventDefault();
    
    // Locate the card element associated with the clicked button
    const cardElement = buttonElement.closest('.card');
    
    // Retrieve data from inputs within this specific card
    const name = cardElement.querySelector('input[placeholder="Enter your name"]').value;
    const email = cardElement.querySelector('input[placeholder="Enter your email"]').value;
    const phone = cardElement.querySelector('input[placeholder="Enter your phone"]').value;
    const batchDate = cardElement.querySelector('#batchDate').value;
    const packageType = cardElement.querySelector('#package').value; 
    const adults = parseInt(cardElement.querySelector('input[placeholder="Adults"]').value, 10);
    const children = cardElement.querySelector('input[placeholder="Children"]').value || 0;

    // Ensure required fields are filled and adults number is valid
    if (!name || !email || !phone || isNaN(adults) || adults < 1) {
        alert('Please fill all required fields correctly. Adults must be 1 or more.');
        return;
    }

    // Retrieve location from data attributes
    const location = cardElement.getAttribute('data-location');

    // Description for Razorpay
    const description = `Booking for ${name}, Location: ${location}, Batch: ${batchDate}, Package: ${packageType}, Adults: ${adults}, Children: ${children}`;
    console.log(description);

    // Razorpay options
    const options = {
        key: 'rzp_live_FXai12FndgJZyQ',
        amount: '4900', // 49 INR in paise
        currency: 'INR',
        name: 'Safarwallah',
        description: description,
        handler: function (response) {
            alert('Payment successful!');
        },
        prefill: {
            name: name,
            email: email,
            contact: phone
        },
        theme: {
            color: '#FF931F'
        }
    };

    // Open Razorpay checkout
    const rzp = new Razorpay(options);
    rzp.open();
}
