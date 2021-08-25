const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let ans = Number(req.body.num1) + Number(req.body.num2);

  res.send("Your Calculated answer is " + ans);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("App started");
});
