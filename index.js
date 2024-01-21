// index.js

// Import the 'axios' package
const axios = require('axios');

// Define the URL for the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make an HTTP GET request using axios
axios.get(apiUrl)
  .then(response => {
    // Log a success message and the received data
    console.log('HTTP GET request successful!');
    console.log('Received data:', response.data);
  })
  .catch(error => {
    // Log an error message if the request fails
    console.error('Error making HTTP GET request:', error.message);
  });





