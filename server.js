// Requires
const express = require("express");
const bodyParser = require("body-parser");

// Initialize Express app
const app = express();

// Body Parser magic
app.use(bodyParser.urlencoded( { extended: false }))

// Enable static files
app.use(express.static(__dirname + '/app/public'));

const PORT = process.env.PORT || 8080;

// Root route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/app/public/home.html");
});

// Survey GET route
app.get("/survey", (req, res) => {
  res.sendFile(__dirname + "/app/public/survey.html");
});

// Survey POST route
app.post("/survey", (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});