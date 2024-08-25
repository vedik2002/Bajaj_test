const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/bfhl', (req, res) => {
    const data = req.body.data || []; // Extract data or default to an empty array

    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

    // Identify the highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(char => /^[a-z]$/.test(char));
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 
        ? [lowercaseAlphabets.sort().pop()]  // Sort and get the last element
        : [];

    // Response object
    const response = {
        is_success: true,
        user_id: "vedik_agarwal_19122002",  // Your name and DOB
        email: "vedik.agarwal2021@vitstudent.ac.in", // Your email
        roll_number: "21BCB0127", // Your roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.json(response); // Send JSON response
});

app.get('/bfhl', (req, res) => {
    const response = { operation_code: 1 }; // Simple GET response
    res.status(200).json(response);
});

// Start the server

module.exports = app;