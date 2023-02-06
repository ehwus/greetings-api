const express = require("express");
const app = express();
const fs = require("fs");

const port = process.env.PORT || 3000;

// Read and cache the JSON.
let greetings;
fs.readFile("hello.json", (err, data) => {
    if (err) throw err;
    greetings = JSON.parse(data);
});

// Enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Serve route
app.get("/api/greetings", (req, res) => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    res.json(greetings[randomIndex]);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
