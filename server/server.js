const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/contact", (req, res) => {
  res.send("CONTACT PAGE!!!!");
});

app.get("/weather", (req, res) => {
  res.json([
    {
      id: 1,
      city: "New York",
      temperature: 25,
      condition: "Sunny",
    },
    {
      id: 2,
      city: "Los Angeles",
      temperature: 30,
      condition: "Cloudy",
    },
  ]);
});

app.get("/weather/:id", (req, res) => {
  const id = Number(req.params.id);
  // Logic to find weather data by ID

  const weatherAPI = [
    {
      id: 1,
      city: "New York",
      temperature: 25,
      condition: "Sunny",
    },
    {
      id: 2,
      city: "Los Angeles",
      temperature: 30,
      condition: "Cloudy",
    },
  ];

  const findWeather = weatherAPI.find((weather) => weather.id === id);
  res.json(findWeather);
});

app.listen(port, () => {
  console.log("Hello World!!!!");
});

app.get("/message", (req, res) => {
  res.json({ message: "This is completed and a test" });
});

app.get("/api/v1/weather/location", (req, res) => {
  const location = req.query.location;
  // Logic to find weather data by location
  fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`,
  )
    .then((response) => response.json())

    .then((data) => {
      // SUCCESS RESPONSE FROM FIRST FETCH!!
      if (!data.results || data.results.length === 0) {
        console.log("No results found for " + location);
        new Error("no response");
      }

      // Extract latitude and longitude from the geocoding API response
      const lat = data.results[0].latitude;
      const lon = data.results[0].longitude;

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,
      )
        .then((response) => response.json())
        .then((data) => {
          // SUCESSS RESPONSE FROM DOING THE FIRST FETCH AND SECOND FETCH, SEND DATA TO FRONTEND!
          res.status(200).json({
            status: "success",
            location: {latitude: lat, longitude: lon},
            data: data,
          });

        }).catch((error) =>
          // ERROR RESPONSE FROM SECOND FETCH  FIRST FETCH WAS SUCCESSFUL BUT SECOND FETCH HAD AN ERROR
          res.status(500).json({
            status: "error",
            message: "There was an error fetching the weather data",
            error: error.toString(),
          }),
        );
    })
    .catch((error) =>
      // ERROR RESPONSE FROM FIRST FETCH
      res.status(500).json({
        status: "error",
        message: "There was an error fetching the geolocation data",
        error: error.toString(),
      }),
    );
});