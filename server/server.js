const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors({
  origin: ["http://localhost:5173"]
}))

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
        condition: "Sunny"
    },
    {
        id: 2,
        city: "Los Angeles",
        temperature: 30,
        condition: "Cloudy"
    }
  ])
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
  res.json({ message: "YOOOO" });
});