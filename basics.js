// Get express module
const express = require('express');
// Instantiate express app
const app = express();
// Define port number
const port = 3000;

// Define home endpoint
app.get('/', (req, res) => {
    res.send("Started Express Application!")
});

// Listen for incoming connections on specified port(3000)
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
