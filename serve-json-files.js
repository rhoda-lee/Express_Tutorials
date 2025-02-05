const express = require('express');
const app = express();

const port = 3000;

app.use("/public", express.static(__dirname + "/public"));

// app.get('/', (req, res) => {
//     res.send("Hello Express!");
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (req, res) => {
    res.json({
        "message": "Hello json",
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


