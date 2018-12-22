const express = require("express");

const app = express();

const PORT = process.env.port || 8080;

app.get("/", (req, res) => {
  res.send("Is this thing on?");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});