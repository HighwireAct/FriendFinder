// Requires
const express = require("express");
const bodyParser = require("body-parser");

// Initialize Express app
const app = express();

// Body Parser magic
app.use(bodyParser.urlencoded( { extended: false }))

// Enable static files
// app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/app/public/home.html");
});

app.get("/survey", (req, res) => {
  res.sendFile(__dirname + "/app/public/survey.html");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});