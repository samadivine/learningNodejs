const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityInput;
  const apiKey = "3c92ad2fcf3532b50085cb7c9d48cb9a";
  const unit = "metric";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(apiUrl, (response) => {
    console.log(response);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const iconIMG = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      const dis = weatherData.weather[0].description;
      res.write(
        "<h1> the temperature in " +
          query +
          " is " +
          temp +
          " degrees Celcuis </h1>"
      );
      res.write(" <p> the weather is currently " + dis + "</p>");
      res.write("<img src=" + iconIMG + " >");
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("App started");
});
