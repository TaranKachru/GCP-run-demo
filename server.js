const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// Home page
app.get("/", (req, res) => {
    res.send("Hello from Google Cloud Run!");
});

// About page
app.get("/about", (req, res) => {
    res.send("This is my first Google Cloud Run project.");
});

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "Running",
        message: "Everything is working!"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
