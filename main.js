const express = require("express");
const app = express();
const fs = require("fs");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/api/greetings", (req, res) => {
    fs.readFile("hello.json", (err, data) => {
        if (err) throw err;
        const greetings = JSON.parse(data);
        const randomIndex = Math.floor(Math.random() * greetings.length);
        res.json(greetings[randomIndex]);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
