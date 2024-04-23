const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to anonymize data
app.post('/anonymize', (req, res) => {
    const data = req.body;
    // Perform anonymization logic here
    // For demonstration purposes, let's just echo back the received data
    const { message } = req.body; // Extracting the 'message' attribute from the request body
    const textToBeAnonymized = message; // Assigning the 'message' to the 'text' variable

    console.log(`text to be anonymized: ${textToBeAnonymized}`)

    res.json({ anonymizedMessage: textToBeAnonymized });
});

// Endpoint to deanonymize data
app.post('/deanonymize', (req, res) => {
    const data = req.body;
    // Perform deanonymization logic here
    // For demonstration purposes, let's just echo back the received data
    res.json({ message: 'Deanonymized data received', data });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
