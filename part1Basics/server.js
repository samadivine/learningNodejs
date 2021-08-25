const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Angela Yu");
});

app.get("/contact", (req, res) => {
  res.send("contact me at: samadivinee@gmail.com");
});

app.get("/about", (req, res) => {
  res.send("I am sama divine, I am a fullstack webdeveloper");
});

app.listen(3000, () => {
  console.log("we are listening to request on port 3000");
});
